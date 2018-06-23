import { RepositoryListModule } from './repository-list.module';

describe('RepositoryListModule', () => {
  let repositoryListModule: RepositoryListModule;

  beforeEach(() => {
    repositoryListModule = new RepositoryListModule();
  });

  it('should create an instance', () => {
    expect(repositoryListModule).toBeTruthy();
  });
});
