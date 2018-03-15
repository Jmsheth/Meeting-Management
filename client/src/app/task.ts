export class Task {
  constructor(
    public taskName: string,
    public taskParticipant: string,
    public dueDate: Date,
    public tag: string,
    public notes: string
  ) {}
}
