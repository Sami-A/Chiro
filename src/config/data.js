export const WorkoutBodyArea = {
  UPPER_BACK: "Upper Back",
  LOWER_BACK: "Lower Back",
};

function generateData(arraySize, bodyArea, url) {
  return Array(arraySize)
    .fill()
    .map((val, index) => {
      return {
        workout_image: url,
        title: `${bodyArea} back title ${index}`,
        instructions: [`${bodyArea} back description ${index}`],
      };
    });
}

const upper_back_workouts = [
  {
    workout_image: "image-upperback.png",
    title: "Upper trapezius stretch",
    description:
      "The primary benefit of the upper trapezius or head tilt stretch is that it reduces tightness in the neck.",
    instructions: [
      "While standing straight or sitting in a chair, take your right hand and place it on the back of your head. Take your left hand and tuck it behind your back.",
      "Using your right hand, gently pull your head toward your right shoulder.",
      "Hold this for 10–15 seconds.",
      "Repeat on the other side.",
    ],
  },
  {
    workout_image: "image-upperback.png",
    title: "Levator scapulae stretch",
    description:
      "Gently stretching the levator scapulae muscle may bring some relief to a tight or sore muscle, and keeping this muscle stretched and flexible may reduce the risk of neck pain returning.",
    instructions: [
      "While standing straight or sitting in a chair, turn your neck 45 degrees to the left.",
      "Bend your neck downward (imagine you’re looking into a shirt pocket). You can use your left hand for a greater stretch.",
      "Hold this for 10–15 seconds.",
      "Repeat on the other side.",
    ],
  },
  {
    workout_image: "image-upperback.png",
    title: "Latissimus dorsi stretch(Elbow pull)",
    description:
      "The latissimus dorsi muscles, known as the lats, are the large V-shaped muscles that connect your arms to your vertebral column. They help protect and stabilize your spine while providing shoulder and back strength.",
    instructions: [
      "Reach your hand down towards the middle back region.",
      "Place your other hand onto the elbow of the hand that is reaching down the back.",
      "Pull the elbow towards the midline.",
      "Tilt your torso towards the side.",
      "Repeat on the other side.",
    ],
  },
];

const lower_back_workouts = [
  {
    workout_image: "image-lowerback.png",
    title: "Seated twist",
    description: "A great twist can not only increase your spinal flexibility, but it can help you to feel lighter, more open, and able to move more freely in your body.",
    instructions: [
      "Sit on a chair or the floor, with the legs crossed or straight out in front. Make sure to sit tall, while pulling the shoulder blades together and down.",
      "Slowly twist to the left side. Place the right hand on the outside of the left knee and place the left hand behind the back to provide support.",
      "Hold the twist for 20–30 seconds, then return to center.",
      "Repeat on the other side.",
    ],
  },
  {
    workout_image: "image-lowerback.png",
    title: "Groin and long adductor muscle stretch",
    description: "Groin and adductor stretches are important for the flexibility and range of motion of the adductor muscles. Good groin and adductor flexibility allows for unrestricted, pain free movement of the inner thigh and upper leg.",
    instructions: [
      "This stretch requires sitting down on the floor with your legs spread out as far apart as you can straight in front of you.",
      "Place your hands on the floor in front of you on the floor and angle your torso toward the floor.",
      "Lean forward, leaving your elbows on the floor. Hold the position for 10 to 20 seconds. Stop if you feel any pain.",
    ],
  },
  {
    workout_image: "image-lowerback.png",
    title: "Bird dog",
    description: "The bird dog is a simple core exercise that improves stability, encourages a neutral spine, and relieves low back pain. This exercise pose uses the whole body to target and strengthen your core, hips, and back muscles.",
    instructions: [
      "Begin on all fours in the tabletop position.",
      "Place your knees under your hips and your hands under your shoulders.",
      "Maintain a neutral spine by engaging your abdominal muscles.",
      "Draw your shoulder blades together.",
      "Raise your right arm and left leg, keeping your shoulders and hips parallel to the floor.",
      "Lengthen the back of your neck and tuck your chin into your chest to gaze down at the floor.",
      "Hold this position for a few seconds, then lower back down to the starting position.",
      "Raise your left arm and right leg, holding this position for a few seconds.",
      "Return to the starting position. This is 1 round.",
      "Repeat! Do 2 to 3 sets of 8 to 12 repetitions.",
    ],
  },
];

export const WorkoutData = new Map([
  [WorkoutBodyArea.UPPER_BACK, upper_back_workouts],
  [WorkoutBodyArea.LOWER_BACK, lower_back_workouts],
]);

export function getSelectedWorkout(bodyArea) {
  return WorkoutData.get(bodyArea);
}
