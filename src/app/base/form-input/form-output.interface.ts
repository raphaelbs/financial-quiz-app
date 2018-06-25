export interface IFormOutput {
  _id?: string;
  question: string;
  answer: any;
  children?: IFormOutput[];
}

export function FilterFormOutput(formOutput: IFormOutput): boolean {
  return !!(
    formOutput.question &&
    (formOutput.answer ||
      (formOutput.children &&
        formOutput.children.filter(FilterFormOutput).length > 0))
  );
}
