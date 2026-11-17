<!--
CONTENT.md — Single Source of Truth for Master-stuff.github.io
=============================================================
Edit text, project specs, equations, tables, or media paths here, then ask the AI agent:
"Sync the site with CONTENT.md"

MEDIA TYPE OPTIONS (used in both index.html rows and projects/<slug>.html breakouts):
- diagram : Technical SVG schematic or CAD cross-section (.media-frame--diagram, 24px white plate, object-fit: contain)
- plot    : Data plot, Bode/step-response chart, or simulation graph (.media-frame--diagram, 24px white plate, object-fit: contain)
- photo   : Hardware photograph (.media-frame--photo, 8px white archival mat, 16:10 crop, bottom caption strip)
- render  : 3D CAD render or software screenshot (.media-frame--photo, 8px white archival mat, 16:10 crop; add "Fit: contain" to avoid cropping)
- none    : Text-only / Work-in-Progress entry (omits media column on index.html and uses .project-row--no-media typographic split)

Note: To swap any starter SVG diagram for a real photo or render, drop the image in /assets/images/,
change `Media Type` to `photo` or `render`, and update `Image` to `/assets/images/<filename>.jpg`.
-->

# Global Site Metadata & Navigation

- **Author:** Abdallah Bouaicha
- **Brand Tag:** PORTFOLIO
- **Email:** abuubaydah07@gmail.com
- **Location:** Rabat-Témara, Morocco
- **GitHub:** https://github.com/Master-stuff
- **LinkedIn:** https://www.linkedin.com/in/abdallah-bouaicha
- **CV Path:** /assets/cv.pdf
- **Demo Notice:** DEMO PHASE — This website is currently in a demo phase. All listed projects and case studies are placeholder entries for website testing purposes and are not real.
- **Navigation Links:** Casebook (`/index.html#casebook`), About (`/about.html`), CV (PDF) (`/assets/cv.pdf`), Contact (`#contact`)

---

# Page: `index.html` — The Engineering Casebook

## Hero
- **Eyebrow:** MECHANICAL ENGINEERING / SELECTED WORK
- **Headline:** Design decisions, made visible.
- **Summary:** Mechanical engineering student at ENSAM Rabat building optical assemblies, high-voltage power electronics, and state-space control systems from first principles.
- **Location:** Rabat-Témara, Morocco

## Casebook Control Bar
- **Section Heading:** Project casebook
- **Filters:** All (`all`), CAD & Optics (`cad-optics`), Mechatronics (`mechatronics`), Control (`control`)

## Project 01 (Summary Card)
- **Index:** PROJECT / 01
- **Slug:** newtonian-telescope
- **Category:** cad-optics
- **Title:** 114/900 Newtonian Optical Telescope Assembly
- **My Role:** Optical Layout & Mechanical CAD
- **Timeline:** Oct 2025 – Jan 2026
- **Summary:** End-to-end mechanical design of a 114 mm aperture, 900 mm focal length Newtonian reflector. Optimized tube baffling, 4-vane secondary spider stiffness, and a zero-backlash rack-and-pinion focuser within a 24.5% central obstruction budget.
- **Tags:** SolidWorks, Optical Raytracing, DFM / 3D Printing, Tolerance Stack
- **Quick Engineering Notes:**
  - Sized secondary diagonal minor axis at 28 mm (24.5% linear obstruction) to preserve planetary contrast while illuminating a 14 mm full-field focal circle.
  - Modeled 1.5 mm rolled steel vs. carbon-reinforced PLA tube deflection under a 1.8 kg eyepiece/camera load; limited tip sag below 0.12 mm.
  - Designed 3-point kinematic spring-loaded primary mirror cell with 120° nylon radial edge pads to prevent astigmatic pinching.
- **Media Type:** diagram
- **Image:** /assets/diagrams/telescope-optics.svg
- **Figure Label:** 01 / OPTICAL ASSEMBLY — Newtonian OTA Cross-Section (D=114mm, f=900mm)
- **Caption:** Longitudinal cross-section showing 114 mm parabolic primary, 45° secondary flat, and terracotta ray convergence at the focal plane.

## Project 02 (Summary Card)
- **Index:** PROJECT / 02
- **Slug:** zvs-plasma-driver
- **Category:** mechatronics
- **Title:** ZVS High-Voltage Flyback Plasma Driver
- **My Role:** Power Electronics & Embedded Control
- **Timeline:** Feb 2026 – Apr 2026
- **Summary:** Self-oscillating Mazzilli Zero-Voltage Switching (ZVS) driver powering a salvaged BSC25-F1118N CRT flyback transformer at ~48 kHz. Paired with an ESP32-C3 resistive voltage-divider telemetry loop for bus under-voltage lockout and thermal fault shutdown.
- **Tags:** Power Electronics, ZVS Topology, ESP32-C3, High-Voltage Safety
- **Quick Engineering Notes:**
  - Tuned 0.68 µF polypropylene resonant tank capacitor against a 5+5 turn center-tapped primary to keep switching transitions strictly at zero drain-source voltage.
  - Added 12 V Zener gate clamps and UF4007 fast-recovery cross-coupling diodes to protect IRFP250N gates from transient ringing during arc ignition.
  - Scaled 12 V DC bus telemetry via a 47 kΩ / 9.4 kΩ divider into the ESP32-C3 12-bit ADC with software RC filtering to trigger soft shutdown above 65 °C heatsink temperature.
- **Media Type:** diagram
- **Image:** /assets/diagrams/zvs-flyback.svg
- **Figure Label:** 02 / POWER TOPOLOGY — Mazzilli ZVS & ESP32-C3 Telemetry Loop
- **Caption:** Schematic block architecture connecting 12 V DC choke feed, dual IRFP250N resonant tank, BSC25-F1118N core, and ESP32-C3 divider sensing.

## Project 03 (Summary Card)
- **Index:** PROJECT / 03
- **Slug:** double-pendulum-lqr
- **Category:** control
- **Title:** Inverted Double Pendulum on a Cart (LQR)
- **My Role:** Dynamic Modeling & Control Synthesis
- **Timeline:** May 2026 – Present
- **Summary:** Nonlinear Euler-Lagrange formulation and Linear Quadratic Regulator (LQR) stabilization for an underactuated 6-DOF inverted double pendulum on a motorized cart. Validated closed-loop disturbance rejection and actuator saturation bounds via RK4 simulation in Python.
- **Tags:** Lagrangian Dynamics, State-Space LQR, Python / SciPy, RK4 Simulation
- **Quick Engineering Notes:**
  - Derived coupled nonlinear inertia $M(q)$, Coriolis $C(q,\dot{q})$, and gravity $G(q)$ matrices symbolically and linearized around the unstable upright equilibrium $\theta_1 = \theta_2 = 0$.
  - Verified full state controllability ($\text{rank}(\mathcal{C}) = 6$) before solving the Continuous Algebraic Riccati Equation (CARE) with Bryson's rule weighting.
  - Evaluated impulse recovery up to $\pm 8^\circ$ initial link perturbations while capping horizontal cart drive force within a $\pm 25\text{ N}$ actuator envelope.
- **Media Type:** diagram
- **Image:** /assets/diagrams/pendulum-lqr.svg
- **Figure Label:** 03 / DYNAMICS & CONTROL — 6-DOF Free-Body & LQR Feedback Loop
- **Caption:** Cart-pendulum coordinate convention $(x, \theta_1, \theta_2)$ with horizontal control force $F = u(t)$ and full-state feedback regulator.

---

# Page: `projects/newtonian-telescope.html`

- **Project Index:** PROJECT / 01
- **Title:** 114/900 Newtonian Optical Telescope Assembly
- **Lead Summary:** First-principles optical layout, structural deflection analysis, and printable mechanical sub-assemblies for a 114 mm $f/7.89$ reflecting telescope.
- **Role:** Optical Layout & Mechanical CAD
- **Timeline:** Oct 2025 – Jan 2026
- **Tools & Stack:** SolidWorks, Python Raytracer, PETG / Carbon-PLA, M4 Hardware
- **Repository / CAD:** `github.com/Master-stuff/newtonian-114-900` (https://github.com/Master-stuff)
- **Media Type:** diagram
- **Image:** /assets/diagrams/telescope-optics.svg
- **Figure Label:** FIG 01 / OPTICAL TUBE ASSEMBLY — 114/900 Longitudinal Ray Diagram
- **Caption:** Primary parabolic reflection ($D = 114\text{ mm}$, $f = 900\text{ mm}$) folded $90^\circ$ by a $28\text{ mm}$ minor-axis diagonal mirror to the focal plane ($b = 132\text{ mm}$).

## 01 / Problem & Constraints
Small-aperture amateur Newtonian reflectors frequently suffer from undersized secondary mirrors, plastic focuser backlash, and pinched primary mirror cells that degrade Strehl ratio well below the diffraction limit. The goal of this project was to architect a rigid, field-collimatable 114 mm Newtonian optical tube assembly (OTA) using off-the-shelf optics paired with custom CAD structural mounts.

Key engineering constraints established before modeling:
- **Aperture & Focal Ratio:** Fixed to a $D = 114\text{ mm}$ parabolic primary mirror with focal length $f = 900\text{ mm}$ ($F/7.89$), giving balanced planetary and deep-sky imaging scale without severe coma.
- **Central Obstruction Limit:** Keep linear central obstruction $\epsilon = d_{\text{sec}} / D \le 25\%$ so first-order diffraction contrast remains crisp on high-magnification planetary targets.
- **Focuser Back-Focus:** Reserve $b = 132\text{ mm}$ from the optical axis to the focal plane so both standard $1.25''$ Plössl eyepieces and a bare DSLR sensor can reach focus without barlow lenses.
- **Manufacturability:** All custom brackets (mirror cell, 4-vane spider hub, tube rings, and focuser housing) must print support-free on a standard $220 \times 220\text{ mm}$ FDM bed with $\pm 0.2\text{ mm}$ assembly clearance.

## 02 / Modeling & Analysis
The parabolic primary mirror surface sagitta $z(r)$ as a function of radial coordinate $r$ eliminates spherical aberration on-axis and follows:

$$z(r) = \frac{r^2}{4f}, \qquad F/\# = \frac{f}{D} = \frac{900}{114} \approx 7.89$$

At wavelength $\lambda = 550\text{ nm}$, the theoretical Rayleigh angular resolution $\theta_R$ and Airy disk diameter $d_{\text{Airy}}$ at the focal plane establish the target mechanical collimation tolerance:

$$\theta_R = 1.22 \frac{\lambda}{D} \approx 1.21\text{ arcsec}, \qquad d_{\text{Airy}} = 2.44 \lambda (F/\#) \approx 10.6\ \mu\text{m}$$

To illuminate an unvignetted field diameter $D_f = 14\text{ mm}$ located $b = 132\text{ mm}$ off the primary optical axis (where tube inner radius $R_{\text{tube}} = 70\text{ mm}$ plus $62\text{ mm}$ focuser height), the minimum secondary mirror minor axis $d_{\text{min}}$ is governed by similar triangles along the converging light cone:

$$d_{\text{min}} = \frac{(D - D_f)\, b}{f} + D_f = \frac{(114 - 14)\times 132}{900} + 14 = 28.67\text{ mm}$$

Selecting a standard $28\text{ mm}$ minor-axis elliptical flat yields a near-zero $13.2\text{ mm}$ full-illumination circle and a $24.56\%$ linear obstruction ($6.0\%$ area obstruction), maintaining diffraction efficiency while staying strictly inside the $25\%$ obstruction budget.

## 03 / Design & Prototyping Iterations
Three subsystem trade-offs drove the mechanical CAD iteration cycle in SolidWorks:

| Subsystem | Candidate Options | Trade-Off & Decision | Outcome |
| :--- | :--- | :--- | :--- |
| Primary Mirror Cell | Silicone-glued fixed plate vs. 3-point spring-loaded cell | Fixed glue induces thermal stress and prevents collimation; 3-point cell uses three M5 thumbscrews + compression springs | Repeatably holds collimation within 0.3 mm laser return |
| Secondary Spider | Single curved stalk vs. 4-vane thin steel blades | Curved stalk eliminates spikes but vibrates under wind; 0.8 mm spring-steel 4-vane cross gives high torsional stiffness | First torsional mode above 85 Hz; minimal diffraction width |
| Tube Material | 1.5 mm rolled aluminum vs. segmented PETG-CF tube | Full-length rolled aluminum/steel tube avoids multi-joint sag across the 840 mm span | End-to-end tip deflection under 1.8 kg load < 0.12 mm |

The primary mirror cell uses three $120^\circ$-spaced nylon edge clips positioned with a $0.15\text{ mm}$ radial air gap above the glass chamfer. Eliminating tight radial clamping prevents trefoil astigmatism during overnight ambient temperature drops from $22^\circ\text{C}$ to $8^\circ\text{C}$.

## 04 / Validation & Results
- **Collimation Stability:** Using a single-beam laser collimator across $0^\circ$ to $75^\circ$ altitude slews, return-beam drift remained inside a $1.5\text{ mm}$ diameter zone around the primary center spot—well within the $2.4\text{ mm}$ coma-free sweet spot for an $f/7.89$ paraboloid.
- **Star Test Verification:** Out-of-focus diffraction rings at $180\times$ magnification showed concentric Fresnel patterns with negligible astigmatism after 40 minutes of thermal equilibration.
- **Next Iteration:** Replace the helical printed focuser collar with a dual-speed Crayford roller bearing stage to support heavier cooled astrophotography cameras.

---

# Page: `projects/zvs-plasma-driver.html`

- **Project Index:** PROJECT / 02
- **Title:** ZVS High-Voltage Flyback Plasma Driver
- **Lead Summary:** High-efficiency Zero-Voltage Switching (ZVS) resonant power stage driving a salvaged CRT flyback transformer, supervised by an ESP32-C3 resistive telemetry and fault-protection controller.
- **Role:** Power Electronics & Embedded Control
- **Timeline:** Feb 2026 – Apr 2026
- **Tools & Stack:** KiCad, LTSpice, ESP32-C3 (C/IDF), Oscilloscope, BSC25-F1118N
- **Repository / CAD:** `github.com/Master-stuff/zvs-flyback-esp32` (https://github.com/Master-stuff)
- **Media Type:** diagram
- **Image:** /assets/diagrams/zvs-flyback.svg
- **Figure Label:** FIG 02 / SCHEMATIC TOPOLOGY — Mazzilli ZVS Driver & ESP32-C3 Telemetry
- **Caption:** Complete power-and-control path from the 12 V DC choke rail through cross-coupled IRFP250N MOSFETs and BSC25-F1118N flyback transformer to ESP32-C3 ADC sensing.

## 01 / Problem & Constraints
Hard-switched single-MOSFET flyback drivers dissipate excessive switching losses ($P_{\text{sw}} \propto V_{DS} I_D f_{\text{sw}}$) when pushing $>100\text{ W}$ into a continuous plasma arc, frequently causing thermal runaway in TO-247 MOSFETs. Conversely, bare self-oscillating Mazzilli ZVS circuits lack telemetry, soft-start limiting, or automated thermal cutoff when running unattended on bench supplies.

Design targets for the hybrid power-and-telemetry prototype:
- **Input Envelope:** $12\text{ V DC}$ nominal bench supply up to $15\text{ A}$ continuous ($180\text{ W}$ peak input).
- **Zero-Voltage Switching:** Maintain resonant tank oscillation between $40\text{ kHz}$ and $65\text{ kHz}$ so MOSFET transitions occur strictly at $V_{DS} \approx 0\text{ V}$.
- **Output Generation:** Sustain a $15\text{–}25\text{ kV}$ rectified/pulsed arc across a $18\text{ mm}$ Jacob's ladder or plasma electrode gap using a salvaged `BSC25-F1118N` CRT flyback core.
- **Embedded Supervision:** Monitor bus rail droop and heatsink temperature via an `ESP32-C3` microcontroller, keeping all ADC inputs strictly inside $[0, 3.3\text{ V}]$ with optical/resistive isolation from the high-voltage secondary return.

## 02 / Modeling & Analysis
In a balanced center-tapped Mazzilli topology, the tank capacitor $C_r$ resonates with the total primary inductance $L_p$ across the full $5+5$ turn winding. The natural oscillation frequency $f_0$ and peak half-cycle drain voltage $V_{DS,\text{pk}}$ follow:

$$f_0 = \frac{1}{2\pi\sqrt{L_p C_r}}, \qquad V_{DS,\text{pk}} \approx \pi\, V_{\text{in}}$$

With a measured primary winding inductance $L_p \approx 16.2\ \mu\text{H}$ (coupled across the gapped ferrite core) and polypropylene film bank $C_r = 0.68\ \mu\text{F}$:

$$f_0 = \frac{1}{2\pi\sqrt{16.2\times 10^{-6} \cdot 0.68\times 10^{-6}}} \approx 47.95\text{ kHz}$$

At $V_{\text{in}} = 12\text{ V}$, the theoretical peak drain-source stress is $V_{DS,\text{pk}} \approx 37.7\text{ V}$ (rising to $\sim 75\text{ V}$ at $24\text{ V}$ supply), leaving more than a $2.5\times$ voltage margin on $200\text{ V}$-rated `IRFP250N` MOSFETs ($R_{DS(\text{on})} = 75\text{ m}\Omega$).

To feed the `ESP32-C3` ADC (maximum $V_{\text{ADC,fs}} = 2.5\text{ V}$ linear range under `ADC_ATTEN_DB_11`), the bus sense divider uses $R_1 = 47\text{ k}\Omega$ and $R_2 = 9.4\text{ k}\Omega$:

$$V_{\text{ADC}} = V_{\text{bus}} \frac{R_2}{R_1 + R_2} = V_{\text{bus}} \frac{9.4}{56.4} = \frac{V_{\text{bus}}}{6.0}$$

At $V_{\text{bus}} = 12.0\text{ V}$, the ADC sees $2.00\text{ V}$, providing clean headroom up to $19.8\text{ V}$ surge transients without clipping the $3.3\text{ V}$ GPIO clamp diodes.

## 03 / Design & Prototyping Iterations
Three hardware revisions resolved gate oscillation instability, inductor saturation, and EMI coupling into the `ESP32-C3`:

| Subsystem | Iteration Issue | Fix Implemented | Measured Impact |
| :--- | :--- | :--- | :--- |
| Feed Choke $L_c$ | Small powdered-iron toroid saturated above 7 A, collapsing ZVS | Replaced with $100\ \mu\text{H}$ gapped sendust core wound with 1.5 mm enameled copper | Linear inductance held up to 16 A without thermal drift |
| Gate Drive Clamp | Gate-source ringing spiked above 20 V during arc strike | Added 12 V 1.3 W Zener clamps + 470 Ω pull-downs and UF4007 fast-recovery diodes | Clean square-edge gate transitions at 48 kHz; zero MOSFET failures |
| MCU Grounding | HV arc EMI reset the ESP32-C3 over shared ground bounce | Star-grounded logic return at bulk input capacitor + 100 nF ceramic decoupling on ADC pin | Continuous 10-minute telemetry logging during open-air arcing |

## 04 / Validation & Results
- **Resonant Operation:** Probing MOSFET drain waveforms confirmed clean half-sine $V_{DS}$ pulses peaking at $38.4\text{ V}$ at $47.6\text{ kHz}$ under $12.2\text{ V}$ input, matching the analytical prediction within $0.8\%$.
- **Thermal Efficiency:** Under a sustained $115\text{ W}$ plasma arc load ($12.0\text{ V}, 9.6\text{ A}$), extruded aluminum heatsink temperatures stabilized at $46^\circ\text{C}$ after 8 minutes—confirming low ZVS switching losses.
- **Fault Cutoff:** Triggering an intentional $10.5\text{ V}$ bus sag or $>65^\circ\text{C}$ NTC threshold caused the `ESP32-C3` supervisor to pull down the low-side enable relay within $4\text{ ms}$.

---

# Page: `projects/double-pendulum-lqr.html`

- **Project Index:** PROJECT / 03
- **Title:** Inverted Double Pendulum on a Cart (LQR)
- **Lead Summary:** Full nonlinear Euler-Lagrange modeling, symbolic Jacobian linearization, and Linear Quadratic Regulator (LQR) state-feedback stabilization of a 6-DOF cart-double-pendulum system.
- **Role:** Dynamic Modeling & Control Synthesis
- **Timeline:** May 2026 – Present
- **Tools & Stack:** Python 3.12, SymPy, NumPy / SciPy, Matplotlib
- **Repository / CAD:** `github.com/Master-stuff/double-pendulum-lqr` (https://github.com/Master-stuff)
- **Media Type:** diagram
- **Image:** /assets/diagrams/pendulum-lqr.svg
- **Figure Label:** FIG 03 / DYNAMICS & CONTROL — Free-Body Diagram & LQR State-Feedback Architecture
- **Caption:** Generalized coordinates $q = [x, \theta_1, \theta_2]^T$ under horizontal actuator force $F = u(t)$, coupled into a continuous-time LQR regulator.

## 01 / Problem & Constraints
An inverted double pendulum mounted on a horizontal cart is a classic benchmark for underactuated nonlinear control: three mechanical degrees of freedom ($x, \theta_1, \theta_2$) must be stabilized simultaneously using a single horizontal cart force $u(t)$. Because the open-loop upright equilibrium is exponentially unstable with two fast right-half-plane poles, PID loops fail to balance both links simultaneously.

Simulation and controller design constraints:
- **Physical Parameters:** Cart mass $M = 1.2\text{ kg}$, link masses $m_1 = 0.35\text{ kg}$, $m_2 = 0.25\text{ kg}$, link lengths $\ell_1 = 0.45\text{ m}$, $\ell_2 = 0.35\text{ m}$ (uniform rods with center of mass at $\ell_i/2$ and $I_i = \frac{1}{12} m_i \ell_i^2$).
- **Actuator Saturation:** Clamp horizontal cart drive force strictly to $|u(t)| \le 25\text{ N}$ and track excursion to $|x(t)| \le 0.8\text{ m}$.
- **Disturbance Recovery:** Recover asymptotically to zero equilibrium from simultaneous initial angular perturbations up to $|\theta_1(0)|, |\theta_2(0)| \le 8^\circ$ within $3.0\text{ s}$.

## 02 / Modeling & Analysis
Defining the generalized coordinate vector $q = [x,\ \theta_1,\ \theta_2]^T$ (angles measured clockwise from the upright vertical) and Lagrangian $\mathcal{L} = T(q, \dot{q}) - V(q)$, the Euler-Lagrange equations yield the coupled second-order manipulator form:

$$M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} u(t)$$

Linearizing around the unstable upright equilibrium $q = 0, \dot{q} = 0$ defines the 6-dimensional state vector $\mathbf{x} = [x,\ \theta_1,\ \theta_2,\ \dot{x},\ \dot{\theta}_1,\ \dot{\theta}_2]^T$ and state-space dynamics:

$$\dot{\mathbf{x}} = A\mathbf{x} + B u, \qquad A = \begin{bmatrix} 0_{3\times 3} & I_{3\times 3} \\ -M_0^{-1} K_g & 0_{3\times 3} \end{bmatrix}, \qquad B = \begin{bmatrix} 0_{3\times 1} \\ M_0^{-1} e_1 \end{bmatrix}$$

To guarantee stability with bounded actuator effort, the infinite-horizon LQR controller minimizes the quadratic cost functional $J$:

$$J = \int_0^\infty \left(\mathbf{x}^T Q \mathbf{x} + u^T R u\right) dt, \qquad u^*(t) = -K\mathbf{x}(t) = -R^{-1} B^T P\,\mathbf{x}(t)$$

where $P = P^T > 0$ is the unique stabilizing solution to the Continuous Algebraic Riccati Equation (CARE):

$$A^T P + P A - P B R^{-1} B^T P + Q = 0$$

## 03 / Design & Prototyping Iterations
Three state-weighting and integration strategies were benchmarked against the full nonlinear plant simulated via 4th-order Runge-Kutta (RK4) at $\Delta t = 2\text{ ms}$:

| Weighting Strategy | $Q = \text{diag}(q_x, q_{\theta_1}, q_{\theta_2}, q_{\dot{x}}, q_{\dot{\theta}_1}, q_{\dot{\theta}_2})$ | Peak Force ($8^\circ$ Perturb.) | Settling & Stability Behavior |
| :--- | :--- | :--- | :--- |
| Uniform Identity | $\text{diag}(1, 1, 1, 1, 1, 1)$ | $38.4\text{ N}$ (Saturated) | Cart travels $>1.4\text{ m}$; upper link diverges when force saturates at $25\text{ N}$ |
| Bryson-Scaled LQR | $\text{diag}(4, 120, 180, 1, 15, 25)$, $R = 0.08$ | $22.6\text{ N}$ (Within limit) | Zero saturation; stabilizes both links in $2.4\text{ s}$ with $\pm 0.34\text{ m}$ cart stroke |
| Aggressive Tip-Lock | $\text{diag}(1, 300, 600, 1, 40, 80)$, $R = 0.02$ | $49.1\text{ N}$ (Severe clipping) | High-frequency chatter on linear plant; loses basin of attraction under $\pm 25\text{ N}$ clip |

Bryson's rule weighting ($Q_{ii} = 1 / x_{i,\max}^2$) proved essential: prioritizing $\theta_2$ angular regulation over tight cart position $x$ allowed the cart to briefly move opposite the initial lean (non-minimum-phase "catch" maneuver) without saturating the $25\text{ N}$ motor limit.

## 04 / Validation & Results
- **Controllability & Eigenvalues:** The open-loop $A$ matrix exhibits two unstable poles ($\lambda_1 \approx +7.82\text{ rad/s}$, $\lambda_2 \approx +3.45\text{ rad/s}$). Full-rank controllability ($\text{rank}([B, AB, \dots, A^5B]) = 6$) enabled the Bryson-tuned LQR gain $K$ to place all six closed-loop eigenvalues strictly in the open left-half plane ($\text{Re}(\lambda_i) \le -1.85\text{ rad/s}$).
- **Nonlinear RK4 Verification:** Integrated against the unapproximated nonlinear $M(q)\ddot{q} + C\dot{q} + G = Bu$ dynamics with $\pm 25\text{ N}$ clipping, the controller reliably stabilizes simultaneous disturbances of $\theta_1(0) = +7.5^\circ, \theta_2(0) = -6.0^\circ$ inside a $0.68\text{ m}$ total rail envelope.
- **Next Milestone:** Add a reduced-order Luenberger / Kalman state observer in Python to test robustness against optical encoder quantization and $\pm 15\text{ mm}$ rail friction uncertainties before hardware bench assembly.

---

# Page: `about.html` — Background & Capabilities

## Header
- **Eyebrow:** ENGINEERING PROFILE / BACKGROUND
- **Headline:** Building physical intuition through CAD, hardware, and math.

## Editorial Bio (Left Column)
- **Lead Paragraph:** I am Abdallah Bouaicha, a Mechanical Engineering student at ENSAM Rabat (Class of 2029) based in Rabat-Témara, Morocco. My work sits at the intersection of classical mechanical design, mechatronics, and analytical control systems.
- **Paragraph 2:** Rather than treating software simulation and physical fabrication as separate worlds, I treat every project as a single closed loop: deriving the governing physics first, translating constraints into manufacturable CAD assemblies or power topologies, and testing real prototypes until empirical measurements match the model.
- **Subheading:** Design Philosophy
- **Paragraph 3:** Good engineering leaves very little hidden. Whether sizing a Newtonian telescope's secondary mirror against diffraction contrast limits, tuning a zero-voltage switching resonant tank, or balancing a 6-DOF inverted double pendulum within actuator saturation bounds, every millimeter, microfarad, and gain coefficient should trace back to a clear physical trade-off.

## Metadata Sidebar (Right Column)
- **EDUCATION:** ENSAM Rabat — Mechanical Engineering Cycle (Class of 2029)
- **LOCATION:** Rabat-Témara, Morocco
- **LANGUAGES:** Arabic (Native), French (Fluent), English (Fluent), German (Intermediate)
- **FOCUS AREAS:** Optical CAD, Power Electronics, Dynamic Modeling & Control
- **CV Button:** Download CV (PDF) (`/assets/cv.pdf`)

## Capabilities & Tooling Matrix (2×2 Grid)
- **Section Heading:** Capabilities & Tooling
- **Section Subtitle:** INDEX / 04 DOMAINS

### 01 / Mechanical Design & Prototyping
- **Description:** Parametric 3D part & assembly modeling, tolerance stack-up analysis, Design for Manufacturing (DFM), and structural kinematic mounts for FDM 3D printing and shop fabrication.
- **Tools:** SolidWorks · FreeCAD · GD&T · FDM (PETG / PLA-CF)

### 02 / Dynamics, Control & Simulation
- **Description:** Nonlinear Euler-Lagrange system derivation, Jacobian linearization, state-space controllability analysis, LQR/Care synthesis, and numerical RK4 integration.
- **Tools:** Python · NumPy / SciPy · SymPy · State-Space LQR

### 03 / Mechatronics & Power Electronics
- **Description:** Resonant ZVS power topologies, flyback high-voltage generation, resistive telemetry scaling, microcontroller fault protection, and oscilloscope waveform validation.
- **Tools:** KiCad · LTSpice · ESP32-C3 (C/IDF) · Bench Oscilloscope

### 04 / Software & Linux Workflow
- **Description:** Reproducible engineering documentation, scientific scripting, hardware test automation, and lightweight static web publishing without bloated toolchains.
- **Tools:** Linux · Git / GitHub Actions · LaTeX / KaTeX · HTML/CSS/JS
