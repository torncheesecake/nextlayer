# WebCTA Background Options

Here are 3 different background options for the CTA section. Copy and paste the one you like into WebCTA.jsx

## OPTION 1: Radial Mesh with Soft Gradients
```jsx
{/* Diagonal base gradient */}
<div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" aria-hidden="true"></div>

{/* Radial mesh overlay */}
<div
  className="absolute inset-0 opacity-40"
  style={{
    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(232, 115, 78, 0.2) 0%, transparent 50%),
                     radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
                     radial-gradient(circle at 50% 90%, rgba(232, 115, 78, 0.15) 0%, transparent 40%)`,
  }}
  aria-hidden="true"
></div>

{/* Varied circles - mix of sharp and blurred */}
<div className="absolute -top-80 -left-80 w-[800px] h-[800px] bg-bittersweet opacity-30 rounded-full blur-[60px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute -top-40 -right-60 w-[700px] h-[700px] bg-purple-500 opacity-35 rounded-full pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute -bottom-60 left-10 w-[650px] h-[650px] bg-purple-600 opacity-40 rounded-full blur-[100px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-bittersweet opacity-35 rounded-full pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-400 opacity-15 rounded-full blur-[80px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
```

## OPTION 2: Bold Spotlight Effect
```jsx
{/* Dark base with subtle gradient */}
<div className="absolute inset-0 bg-black" aria-hidden="true"></div>

{/* Spotlight gradients */}
<div className="absolute inset-0 bg-gradient-to-br from-bittersweet/10 via-transparent to-purple-500/10" aria-hidden="true"></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-950/50 to-transparent" aria-hidden="true"></div>

{/* Large, dramatic circles */}
<div className="absolute -top-96 -left-96 w-[900px] h-[900px] bg-bittersweet opacity-45 rounded-full blur-[120px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute -top-60 -right-80 w-[800px] h-[800px] bg-purple-500 opacity-40 rounded-full blur-[100px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute -bottom-80 left-0 w-[750px] h-[750px] bg-purple-600 opacity-50 rounded-full blur-[140px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bittersweet opacity-45 rounded-full blur-[110px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
```

## OPTION 3: Layered Depth with Grid Pattern
```jsx
{/* Base gradient */}
<div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-950 to-black" aria-hidden="true"></div>

{/* Subtle grid pattern overlay */}
<div
  className="absolute inset-0 opacity-5"
  style={{
    backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
    backgroundSize: '100px 100px',
  }}
  aria-hidden="true"
></div>

{/* Color wash layer */}
<div className="absolute inset-0 bg-gradient-to-br from-bittersweet/5 via-transparent via-50% to-purple-500/5" aria-hidden="true"></div>

{/* Mixed circles - some sharp, some soft */}
<div className="absolute -top-80 -left-80 w-[800px] h-[800px] bg-bittersweet opacity-40 rounded-full pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute top-0 -right-60 w-[700px] h-[700px] bg-purple-500 opacity-30 rounded-full blur-[80px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute -bottom-60 left-20 w-[650px] h-[650px] bg-purple-600 opacity-35 rounded-full pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-bittersweet opacity-25 rounded-full blur-[100px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
<div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-purple-400 opacity-20 rounded-full blur-[60px] pointer-events-none z-[1]" style={{ willChange: "transform" }} aria-hidden="true"></div>
```

## Try them out!
Replace the background section in WebCTA.jsx (starting from `{/* Base linear gradient background */}` to just before `<div className="mx-auto max-w-7xl...`) with any of these options.
