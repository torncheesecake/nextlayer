import RescueChecklist from "./RescueIsthisyou";
import RescuePain from "./RescuePain";
import SEO from "../../components/SEO";

export default function ImplementationRescue() {
  return (
    <>
      <SEO
        title="Implementation Rescue"
        description="Rescue your failing NetSuite implementation with expert UK consultants. Fix stalled projects, resolve integration issues, correct misconfiguration, and get your ERP back on track. Proven rescue methodology to deliver working NetSuite systems from failed implementations. Get your project unstuck."
        path="/netsuite/implementation-rescue"
      />
      <RescuePain /> <RescueChecklist />
    </>
  );
}
