export interface IFormOutput {
  _id?: string;
  question: string;
  anwser: any;
  children?: IFormOutput[];
}

export function FilterFormOutput(formOutput: IFormOutput): boolean {
  return !!(
    formOutput.question &&
    (formOutput.anwser ||
      (formOutput.children &&
        formOutput.children.filter(FilterFormOutput).length > 0))
  );
}
