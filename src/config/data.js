export const WorkoutBodyArea = {
  UPPER_BACK: "Upper Back",
  LOWER_BACK: "Lower Back",
};

export const ImageURL = "@assets/";

export const WorkoutData = {
  [WorkoutBodyArea.UPPER_BACK]: [
    {
      workout_image: ImageURL + "image.png",
      title: "Upper back title",
      description: "Upper back description",
    },
    {
      workout_image: ImageURL + "image.png",
      title: "Upper back title 1",
      description: "Upper back description 1",
    },
    {
      workout_image: ImageURL + "image.png",
      title: "Upper back title 2",
      description: "Upper back description 2",
    },
  ],
  [WorkoutBodyArea.LOWER_BACK]: [
    {
      workout_image: ImageURL + "image.png",
      title: "Lower back title",
      description: "Lower back description",
    },
    {
      workout_image: ImageURL + "image.png",
      title: "Lower back title 1",
      description: "Lower back description 1",
    },
  ],
};

export function getSelectedWorkout(bodyArea) {
  return WorkoutData[bodyArea];
}
