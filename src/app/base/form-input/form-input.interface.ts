export interface IFormInput {
  type: string;
  label: string;
  key?: string;
  required?: boolean;
  children?: IFormInput[];
}
