import mongoose, { Document, Schema } from "mongoose";

export interface IFlashcard {
  meaning: string;
  translation: string;
  category: string;
  date: string;
}

export interface IFlashcardModel extends IFlashcard, Document {}

const FlashcardSchema: Schema<IFlashcardModel> = new Schema(
  {
    meaning: { type: String, required: true},
    translation: { type: String, required: true},
    category: { type: String, required: true},
    date: { type: String, required: true},
  },
  {
    versionKey: false,
  }
)

export default mongoose.model<IFlashcardModel>('Author', FlashcardSchema);