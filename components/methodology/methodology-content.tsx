import React from "react";
import { StaggeredReveal, StaggeredItem } from "@/components/layout/reveal";

function NodeGraph() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="text-[9px] tracking-widest text-[#4C535A] uppercase font-mono mb-4">
        RUNTIME PIPELINE
      </div>
      <div className="flex-grow relative flex items-center justify-center my-4">
        <svg className="w-full h-full max-w-[400px] max-h-[250px]" viewBox="0 0 400 250">
          <g stroke="#2A2F36" strokeWidth="1">
            {/* Edges */}
            <line x1="200" y1="100" x2="270" y2="75" /> {/* TRSY to LP-A */}
            <line x1="200" y1="100" x2="240" y2="180" /> {/* TRSY to AMM */}
            <line x1="200" y1="220" x2="240" y2="180" /> {/* ORC to AMM */}
            <line x1="270" y1="75" x2="320" y2="115" />  {/* LP-A to DAO */}
            <line x1="320" y1="115" x2="360" y2="150" /> {/* DAO to GOV */}
            <line x1="290" y1="200" x2="360" y2="150" /> {/* VLT to GOV */}
            <line x1="270" y1="75" x2="290" y2="200" />  {/* LP-A to VLT */}
            {/* Orange Edges */}
            <line x1="270" y1="75" x2="240" y2="180" stroke="#C84B15" strokeWidth="1.5" />
            <line x1="240" y1="180" x2="290" y2="200" stroke="#C84B15" strokeWidth="1.5" />
          </g>
          {/* Nodes */}
          <g fill="#111317" stroke="#4C535A" strokeWidth="2">
            <circle cx="200" cy="100" r="4" /> {/* TRSY */}
            <circle cx="320" cy="115" r="4" /> {/* DAO */}
            <circle cx="360" cy="150" r="4" /> {/* GOV */}
            <circle cx="200" cy="220" r="4" /> {/* ORC */}
          </g>
          <g fill="#111317" stroke="#C84B15" strokeWidth="2">
            <circle cx="270" cy="75" r="4.5" /> {/* LP-A */}
            <circle cx="240" cy="180" r="4.5" fill="#C84B15" /> {/* AMM */}
            <circle cx="290" cy="200" r="4.5" /> {/* VLT */}
          </g>
          {/* Labels */}
          <g fill="#4C535A" fontSize="9" fontFamily="monospace" letterSpacing="1">
            <text x="210" y="103">TRSY</text>
            <text x="280" y="78">LP-A</text>
            <text x="250" y="183">AMM</text>
            <text x="300" y="203">VLT</text>
            <text x="330" y="118">DAO</text>
            <text x="370" y="153">GOV</text>
            <text x="210" y="223">ORC</text>
          </g>
          {/* Floating orange particle */}
          <circle cx="180" cy="80" r="2.5" fill="#C84B15" />
        </svg>
      </div>
      <div className="text-[9px] font-mono mt-4">
        <span className="text-[#658A91]">&gt; populate agents</span>{" "}
        <span className="text-[#4C535A]">·</span>{" "}
        <span className="text-[#8A9098]">n=12,400</span>
        <br/>
        <span className="text-[#4C535A]">· advancing epoch 144 · σ=0.041</span>
      </div>
    </div>
  );
}

export function MethodologyContent() {
  return (
    <div className="w-full flex flex-col gap-12">
      
      {/* SECTION 1: Framework & Pipeline */}
      <StaggeredReveal className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1C2026] border border-[#1C2026]">
        <StaggeredItem className="bg-[#0E1013] p-10 flex flex-col justify-between">
          <div>
            <div className="text-[9px] tracking-widest text-[#C84B15] uppercase font-mono mb-6">
              SIMULATION FRAMEWORK
            </div>
            <h2 className="text-2xl font-normal text-white mb-6" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
              Inputs become agent populations.
            </h2>
            <p className="text-[13px] text-[#8A9098] leading-[1.6] mb-5">
              A scenario is specified as inputs and constraints. From these, the runtime
              instantiates wallet cohorts from empirically-fit behavioral vectors, then advances
              them through the economic and governance models over a configured number of epochs.
            </p>
          </div>
          <div className="flex flex-col text-[13px] text-[#8A9098] gap-2 mt-4">
            <div className="flex items-center justify-between py-2 border-b border-[#1C2026]">
              <span className="text-white font-sans font-medium">Simulation inputs</span>
              <span className="font-mono text-[11px] text-[#8A9098]">epochs · cohort mix · treasury baseline · stress layers</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#1C2026]">
              <span className="text-white font-sans font-medium">Agent systems</span>
              <span className="font-mono text-[11px] text-[#8A9098]">cohort populations with distinct exit functions</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#1C2026]">
              <span className="text-white font-sans font-medium">Modeling systems</span>
              <span className="font-mono text-[11px] text-[#8A9098]">behavioral · economic · governance · network</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white font-sans font-medium">Behavioral assumptions</span>
              <span className="font-mono text-[11px] text-[#8A9098]">empirically fit, regime-bounded</span>
            </div>
          </div>
        </StaggeredItem>
        <StaggeredItem className="bg-[#111317] p-10 flex flex-col justify-between min-h-[400px]">
          <NodeGraph />
        </StaggeredItem>
      </StaggeredReveal>

      {/* SECTION 2: Modeling Layers */}
      <StaggeredReveal>
        <div className="text-[9px] tracking-widest text-[#C84B15] uppercase font-mono mb-4">
          MODELING LAYERS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1C2026] border border-[#1C2026]">
          {/* Layer 1 */}
          <StaggeredItem className="bg-[#0E1013] p-8">
            <div className="text-[9px] tracking-widest text-[#C84B15] uppercase font-mono mb-2">BEHAVIORAL LAYER</div>
            <h3 className="text-xl text-white mb-2.5">Behavioral layer</h3>
            <p className="text-[13px] text-[#8A9098] leading-[1.6] mb-5 min-h-[48px]">
              Agent-level response functions fit to empirical wallet behavior. Each cohort carries yield
              sensitivity, peer-response weight, and an exit threshold that governs when it acts.
            </p>
            <ul className="text-[11px] font-mono text-[#8A9098] flex flex-col space-y-2">
              <li className="flex gap-3 items-center border-b border-[#1C2026] pb-2">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Cohort propensity functions</span>
              </li>
              <li className="flex gap-3 items-center border-b border-[#1C2026] pb-2">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Exit-threshold modeling</span>
              </li>
              <li className="flex gap-3 items-center pb-1">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Peer-response weighting</span>
              </li>
            </ul>
          </StaggeredItem>
          {/* Layer 2 */}
          <StaggeredItem className="bg-[#0E1013] p-8">
            <div className="text-[9px] tracking-widest text-[#C84B15] uppercase font-mono mb-2">ECONOMIC LAYER</div>
            <h3 className="text-xl text-white mb-2.5">Economic layer</h3>
            <p className="text-[13px] text-[#8A9098] leading-[1.6] mb-5 min-h-[48px]">
              The flow of capital, emissions, and yield across the system. Models treasury vaults,
              emission schedules, and realized-yield surfaces that agents respond to.
            </p>
            <ul className="text-[11px] font-mono text-[#8A9098] flex flex-col space-y-2">
              <li className="flex gap-3 items-center border-b border-[#1C2026] pb-2">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Emission & reward schedules</span>
              </li>
              <li className="flex gap-3 items-center border-b border-[#1C2026] pb-2">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Treasury vault dynamics</span>
              </li>
              <li className="flex gap-3 items-center pb-1">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Realized-yield surfaces</span>
              </li>
            </ul>
          </StaggeredItem>
          {/* Layer 3 */}
          <StaggeredItem className="bg-[#0E1013] p-8">
            <div className="text-[9px] tracking-widest text-[#C84B15] uppercase font-mono mb-2">GOVERNANCE LAYER</div>
            <h3 className="text-xl text-white mb-2.5">Governance layer</h3>
            <p className="text-[13px] text-[#8A9098] leading-[1.6] mb-5 min-h-[48px]">
              Delegate cohorts, concentration, and proposal dynamics. Models realized voting behavior
              conditioned on proposal type, timing, and delegate concentration.
            </p>
            <ul className="text-[11px] font-mono text-[#8A9098] flex flex-col space-y-2">
              <li className="flex gap-3 items-center border-b border-[#1C2026] pb-2">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Delegate cohort behavior</span>
              </li>
              <li className="flex gap-3 items-center border-b border-[#1C2026] pb-2">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Concentration analysis</span>
              </li>
              <li className="flex gap-3 items-center pb-1">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Pass-rate forecasting</span>
              </li>
            </ul>
          </StaggeredItem>
          {/* Layer 4 */}
          <StaggeredItem className="bg-[#0E1013] p-8">
            <div className="text-[9px] tracking-widest text-[#C84B15] uppercase font-mono mb-2">NETWORK LAYER</div>
            <h3 className="text-xl text-white mb-2.5">Network layer</h3>
            <p className="text-[13px] text-[#8A9098] leading-[1.6] mb-5 min-h-[48px]">
              Cross-protocol and cross-chain topology. Models how capital routes and migrates
              between venues, surfacing concentration and contagion paths before they form.
            </p>
            <ul className="text-[11px] font-mono text-[#8A9098] flex flex-col space-y-2">
              <li className="flex gap-3 items-center border-b border-[#1C2026] pb-2">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Capital routing topology</span>
              </li>
              <li className="flex gap-3 items-center border-b border-[#1C2026] pb-2">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Cross-chain migration</span>
              </li>
              <li className="flex gap-3 items-center pb-1">
                <span className="w-1.5 h-1.5 bg-[#658A91] shrink-0" />
                <span>Contagion-path detection</span>
              </li>
            </ul>
          </StaggeredItem>
        </div>
      </StaggeredReveal>

      {/* SECTION 3: Simulation Lifecycle */}
      <StaggeredReveal>
        <div className="text-[9px] tracking-widest text-[#C84B15] uppercase font-mono mb-4">
          SIMULATION LIFECYCLE
        </div>
        <div className="flex flex-col border border-[#1C2026] bg-[#0E1013]">
          {[
            { num: "01", title: "Proposal submitted", desc: "An economic decision is framed as a scenario — a compression schedule, a treasury policy, a governance change." },
            { num: "02", title: "Variables defined", desc: "Inputs, constraints, and stress layers are specified: epochs, cohort composition, treasury baseline, shock events." },
            { num: "03", title: "Agent populations generated", desc: "Wallet cohorts are instantiated from empirically-fit behavioral vectors at the configured scale." },
            { num: "04", title: "Simulations executed", desc: "The scenario is advanced across epochs in the runtime, recording capital, governance, and cohort trajectories." },
            { num: "05", title: "Stress testing applied", desc: "Economic stress layers are introduced at defined epochs to test behavior under adverse, not baseline, conditions." },
            { num: "06", title: "Outcomes analyzed", desc: "Runs are aggregated to convergence; retention curves, migration paths, and second-order effects are extracted." },
            { num: "07", title: "Recommendations generated", desc: "Outputs are translated into deployment-ready strategy through the decision matrix — with stated assumptions and limits." },
          ].map((step, i) => (
            <StaggeredItem key={step.num} className={`flex flex-col md:flex-row gap-4 py-4 px-6 items-start md:items-center ${i !== 6 ? 'border-b border-[#1C2026]' : ''} ${i % 2 === 0 ? 'bg-[#0E1013]' : 'bg-[#111317]'}`}>
              <div className="w-12 text-[#C84B15] font-mono text-[11px] font-bold shrink-0">{step.num}</div>
              <div className="w-64 text-white text-[13px] shrink-0 font-medium">{step.title}</div>
              <div className="text-[#8A9098] text-[12px] leading-relaxed">{step.desc}</div>
            </StaggeredItem>
          ))}
        </div>
      </StaggeredReveal>

      {/* SECTION 4: Assumptions & Constraints */}
      <StaggeredReveal>
        <div className="bg-[#111317] border border-[#1C2026] p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#658A91]" />
            <span className="text-[9px] tracking-widest text-[#658A91] uppercase font-mono">
              ASSUMPTIONS & CONSTRAINTS
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
            <div>
              <h3 className="text-xl text-white mb-2.5" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>Probabilistic, not deterministic</h3>
              <p className="text-[13px] text-[#8A9098] leading-[1.6]">
                Outputs are distributions across runs, not single predictions. We report convergence (σ) so
                the confidence of a result is always legible.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white mb-2.5" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>Behavioral fit, not certainty</h3>
              <p className="text-[13px] text-[#8A9098] leading-[1.6]">
                Cohort response functions are fit to observed behavior. They generalize well within regime
                but are not guarantees of out-of-regime behavior.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white mb-2.5" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>Scenarios, not forecasts</h3>
              <p className="text-[13px] text-[#8A9098] leading-[1.6]">
                A simulation answers &apos;how would this economy behave under these conditions,&apos; not &apos;what
                will happen.&apos; The value is in comparing decisions, not predicting the future.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white mb-2.5" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>Bounded scope</h3>
              <p className="text-[13px] text-[#8A9098] leading-[1.6]">
                Exogenous shocks — regulatory events, market-wide crashes — are modeled as stress
                layers, not endogenously predicted. We are explicit about what sits outside the model.
              </p>
            </div>
          </div>
        </div>
      </StaggeredReveal>

    </div>
  );
}
