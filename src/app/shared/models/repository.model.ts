import { License } from '@app-models/license.model';

export class Repository {
    public description: string;
    public forks_count: number;
    public html_url: string;
    public name: string;
    public stargazers_count: number;
    public created_at: Date;
    public language: string;
    public license: License;
}
