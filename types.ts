export type Emotion = "NO_ENERGY" | "UNFOCUS" | "OVERWHELMED" | "ANXIETY";

export interface ContentData {
  buttonLabel: string;
  introText: string;
  practiceTitle: string;
  practiceText: string;
  completionText: string;
}

export type ViewState =
  | "WELCOME"
  | "INTRO"
  | "PRACTICE"
  | "SUCCESS"
  | "REPEAT_PROMPT";
