import { useState } from 'react';

export default function Qa() {
  // This tracks which index is open. 'null' means nothing is open.
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "Can you manage the creative process end to end?",
      a: (
        <>
          <h4>Yes.</h4>
          <p>I do more than generate concepts. I oversee the full creative workflow from research and angle development to scripting, creative direction, production alignment, testing priorities, and iteration.</p>
          <p>My role is to create clarity across the process so teams move faster, decisions become easier, and creative output stays connected to business goals.</p>
        </>
      )
    },
    {
      q: "How do you work with existing teams?",
      a: (
        <>
          <p>I integrate into existing workflows and create alignment across functions.</p>
          <p>Whether your team includes media buyers, editors, designers, creators, or operators, I help connect strategy with execution so everyone works toward the same objective.</p>
          <p>That includes setting priorities, shaping creative direction, organizing testing cycles, and helping teams maintain speed without losing quality.</p>
        </>
      )
    },
    {
      q: "What do you actually deliver?",
      a: (
        <>
          <p>Everything is built to be executed, not presented.</p>
          <p>Depending on the scope, deliverables can include:</p>
          <ul className="qa-bullet-list">
            <li>Customer and competitor research</li>
            <li>Creative strategy</li>
            <li>Messaging architecture</li>
            <li>Creative concepts and testing plans</li>
            <li>Hooks and marketing angles</li>
            <li>Meta, TikTok, and Google ad scripts</li>
            <li>Creative briefs and visual direction</li>
            <li>Performance based iterations and recommendations</li>
          </ul>
          <p>The objective is simple: give your team clear outputs they can launch confidently.</p>
        </>
      )
    },
    {
      q: "How do you decide what to test next?",
      a: (
        <>
          <p>I prioritize based on opportunity and evidence.</p>
          <p>I combine customer psychology, platform behavior, performance signals, and business goals to identify the highest leverage opportunities.</p>
          <p>Every concept should answer a clear hypothesis and every test should create learning that improves the next round of creative.</p>
        </>
      )
    },
    {
      q: "What approach do you follow when building creative strategy?",
      a: (
        <>
          <p className="process-highlight">Research → Positioning → Angles → Creative Development → Launch → Data Analysis → Iteration</p>
          <p>I start by understanding the customer and market, translate those insights into creative concepts, then use real performance data to refine and evolve the strategy.</p>
          <p>The goal is not to create more creative. The goal is to create a system that keeps producing stronger creative over time.</p>
        </>
      )
    }
  ];

  return (
    <section className="main-content-section" id="qa-part">
      <div className="section-label">FAQ</div>
      <h2 className="section-headline">Questions Teams Ask Before Bringing Me Into Creative</h2>
      
      <div className="qa-container">
        {faqData.map((item, index) => (
          <div key={index} className={`qa-block ${activeIndex === index ? 'is-active' : ''}`}>
            <button type="button" className="qa-trigger" onClick={() => toggle(index)}>
              <span className="qa-question">{item.q}</span>
              <span className="accordion-icon"></span>
            </button>
            <div className="qa-answer-wrapper" style={{ height: activeIndex === index ? 'auto' : '0px', overflow: 'hidden', transition: 'height 0.3s ease' }}>
              <div className="qa-answer">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}