import * as yup from "yup";

export const validationSchemaCharacter = yup.object({
  name: yup.string().required("Name is required"),
  ac: yup
    .string()
    .matches(
      /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/,
      "Armor class needs to be a number"
    ),
  health: yup
    .string()
    .matches(
      /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/,
      "Health needs to be a number"
    )
    .required("Health is required, but you dont need to keep track"),
  level: yup
    .string()
    .matches(
      /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/,
      "Level needs to be a number"
    )
    .required("Level is required for appropriate monster assignments")
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Please enter a valid Phone Number"
    ),
  initiative: yup
    .string()
    .matches(
      /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/,
      "Initiative needs to be a number"
    )
    .required("Initiative is required"),
});

export const validationSchemaQuickFight = yup.object({
  playerNum: yup
    .string()
    .required("Site ID is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Number of players is required"),

  playerLevel: yup
    .string()
    .required("Average player level is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must have at least an average level of 1"),
});
