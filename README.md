# Pendulum Simulator

The pendulum simulator is a web application designed to model the motion of a simple pendulum, including damping effects. It provides an interactive platform for users to explore how different parameters affect pendulum behavior.

## How the App Works

### User Interface

#### Canvas Display
- A `<canvas>` element serves as the main drawing area where the pendulum animation is rendered.
- The canvas has a specified width and height to accommodate the pendulum's motion.

#### Control Panel
- Located below the canvas, the control panel includes input elements and buttons for user interaction.

### Parameters
- **Length (px)**: A range slider labeled "Length (px)" allows users to adjust the length of the pendulum. Although labeled in pixels, the simulator converts this value to meters internally for accurate physics calculations.
- **Initial Angle (°)**: A range slider for setting the pendulum's starting angle in degrees. Users can set angles between -90° and 90°.
- **Gravity (m/s²)**: A numeric input for adjusting the gravitational acceleration. The default value is 9.81 m/s², representing Earth's gravity.
- **Damping**: A numeric input to set the damping coefficient, simulating the effect of air resistance or friction. A higher value results in quicker energy loss.

### Control Buttons
- **Start**: Begins or restarts the simulation with the current parameter settings. It resets the pendulum to the initial conditions specified.
- **Pause**: Toggles between pausing and resuming the simulation. When paused, the pendulum stops moving, allowing users to adjust parameters or observe the pendulum at a specific point in its swing.

### Simulation Mechanics

#### Physics Engine
The simulator uses the mathematical model of a simple pendulum to calculate its motion:


\[ \theta'' = -\left( \frac{g}{L} \right) \sin(\theta) - b \theta' \]


- \( \theta \): Angular displacement (in radians).
- \( \theta' \): Angular velocity.
- \( \theta'' \): Angular acceleration.
- \( g \): Gravitational acceleration.
- \( L \): Length of the pendulum.
- \( b \): Damping coefficient.
The equations account for both gravitational forces and damping effects to simulate realistic pendulum behavior.

#### Time-Based Calculations
- The simulation incorporates time elapsed between frames to ensure consistent motion regardless of frame rate variations.
- By calculating the change in time (deltaTime) between animation frames, the simulator updates the pendulum's position accurately even if the frame rate fluctuates due to user interactions or system performance.

### Animation and Rendering
- The simulator uses JavaScript's `requestAnimationFrame()` method to create a smooth animation loop.
- At each frame, the following steps occur:
  - **Update Physics**: The pendulum's angular velocity and position are updated based on the physics calculations.
  - **Render Frame**: The canvas is cleared, and the pendulum is redrawn in its new position.
  - **Loop**: The animation function calls itself recursively as long as the simulation is running.

### Interactivity

#### Real-Time Parameter Adjustment
- Users can adjust the length, initial angle, gravity, and damping while the simulation is paused.
- Changing parameters updates the internal variables, and the pendulum resets to reflect these changes upon restarting.

#### Event Listeners
- Input elements and buttons have event listeners that respond to user interactions.
- For example, moving the length slider triggers an event that updates the pendulum's length and redraws it.

### Behind the Scenes

#### Scaling Factors
- To maintain consistency between real-world measurements (meters) and on-screen representation (pixels), the simulator uses scaling factors.
- This ensures that the physics calculations use appropriate units and the pendulum appears at a reasonable size within the canvas.

#### Initialization
- When the page loads, the simulator initializes the pendulum with default parameters and renders it in a stationary state.
- Users can then customize the simulation before starting it.
