export const WorkoutBodyArea = {
  UPPER_BACK: "Upper Back",
  LOWER_BACK: "Lower Back",
};

export const ImageURL = "@assets/";

function generateData(arraySize, bodyArea) {
  return Array(arraySize)
    .fill()
    .map((val, index) => {
      return {
        workout_image: ImageURL + "image.png",
        title: `${bodyArea} back title ${index}`,
        description: `${bodyArea} back description ${index}`,
      };
    });
}

export const WorkoutData = {
  [WorkoutBodyArea.UPPER_BACK]: generateData(30, "Upper"),
  [WorkoutBodyArea.LOWER_BACK]: generateData(2, "Lower"),
};

export function getSelectedWorkout(bodyArea) {
  return WorkoutData[bodyArea];
}
