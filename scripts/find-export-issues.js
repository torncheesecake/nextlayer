const fs = require('fs');
const path = require('path'); const ROOT = process.argv[2] || process.cwd();
const EXTS = ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.cjs']; function readFiles(dir) { const files = []; const entries = fs.readdirSync(dir, { withFileTypes: true }); for (const e of entries) { if (e.name === 'node_modules' || e.name === '.git') continue; const full = path.join(dir, e.name); if (e.isDirectory()) files.push(...readFiles(full)); else if (EXTS.includes(path.extname(e.name))) files.push(full); } return files;
} function resolveModule(fromFile, spec) { if (!spec.startsWith('.')) return null; // skip non-relative const base = path.resolve(path.dirname(fromFile), spec); // try file with extensions for (const ext of EXTS) { const p = base + ext; if (fs.existsSync(p)) return p; } // try index files in folder for (const ext of EXTS) { const p = path.join(base, 'index' + ext); if (fs.existsSync(p)) return p; } // if spec already had extension and exists if (fs.existsSync(base)) return base; return null;
} function hasDefaultExport(content) { // rough heuristic for `export default ...` or `export { default as ... }` or `export { default }` return /(^|\n)\s*export\s+default\b/.test(content) || /export\s*\{\s*default\b/.test(content) || /module\.exports\s*=\s*/.test(content);
} function findStarExports(content) { const re = /export\s*\*\s*from\s*['"]([^'"]+)['"]/g; const results = []; let m; while ((m = re.exec(content))) results.push(m[1]); return results;
} const files = readFiles(ROOT);
const starMap = new Map(); // file -> [resolved targets]
const defaultMap = new Map(); // file -> bool
for (const f of files) { let content; try { content = fs.readFileSync(f, 'utf8'); } catch (e) { continue; } defaultMap.set(f, hasDefaultExport(content)); const stars = findStarExports(content).map(spec => resolveModule(f, spec)).filter(Boolean); if (stars.length) starMap.set(f, stars);
} // Report star exports that point to modules with default exports
const problems = [];
for (const [src, targets] of starMap.entries()) { for (const t of targets) { if (defaultMap.get(t)) problems.push({ src, target: t }); }
} if (problems.length) { console.log('Found export * -> module-with-default situations (these can cause the "default" binding error):\n'); for (const p of problems) { console.log(`- ${path.relative(ROOT, p.src)} --> ${path.relative(ROOT, p.target)}`); } console.log('\nFix by re-exporting default explicitly, e.g.:\n export { default as Foo } from "./module";\n // or\n import Foo from "./module"; export default Foo;');
} else { console.log('No star-export -> default targets detected.');
} // Build graph of star-exports to detect cycles
const graph = new Map();
for (const f of files) graph.set(f, []);
for (const [src, targets] of starMap.entries()) { graph.set(src, targets.filter(Boolean));
} const visited = new Set();
const stack = new Set();
const cycles = []; function dfs(node, pathSoFar) { if (!graph.has(node)) return; visited.add(node); stack.add(node); for (const nb of graph.get(node)) { if (!nb) continue; if (!visited.has(nb)) { dfs(nb, pathSoFar.concat(nb)); } else if (stack.has(nb)) { // found cycle const cycle = pathSoFar.concat(nb).map(p => path.relative(ROOT, p)); cycles.push(cycle); } } stack.delete(node);
} for (const node of graph.keys()) { if (!visited.has(node)) dfs(node, [node]);
} if (cycles.length) { console.log('\nDetected star-export cycles (may lead to unresolved default bindings):\n'); for (const c of cycles) console.log('- ' + c.join(' -> '));
} else { console.log('\nNo star-export cycles detected.');
}