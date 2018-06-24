import { User } from '@app-models/user.model';

export class Repository {
    public description: string;
    public forks_count: number;
    public full_name: string;
    public html_url: string;
    public name: string;
    public owner: User;
    public stargazers_count: number;
    public updated_at: Date;
}
