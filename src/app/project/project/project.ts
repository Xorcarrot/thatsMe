export class Project {
    name: string;
    comment: string;
    url: string;
    gitHub: string;

    constructor(name: string, comment: string, url: string, gitHub: string) {
        this.name = name;
        this.comment = comment;
        this.url = url;
        this.gitHub = gitHub;
    }
}