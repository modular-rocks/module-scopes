import Scope from './index.js'

describe("ModularRocks Scope", () => {
  test("Scope pathname works", () => {
    const scope = new Scope('pages')
    scope.index = 0
    expect(scope.pathname).toEqual('pages');
  });

  test("Scope build works", () => {
    const scope = new Scope('pages')
    scope.index = 0
    expect(scope.build()).toEqual({});
  });

  test("Scope add works", () => {
    const scope = new Scope('pages')
    scope.index = 0
    const filePath = '/root/dir/grand'
    const section = [{}]
    scope.add(section, filePath)
    expect(section).toEqual([{'/root/dir/': ['grand']}]);
  });

  test("Scope extract works", () => {
    const scope = new Scope('pages')
    scope.index = 0
    const path = '/root/dir/pages/grand'
    const { scopeProp, relativePath } = scope.extract(path, scope)

    expect(scopeProp).toEqual('/root/dir/');
    expect(relativePath).toEqual('/grand');
  });

  test("Scope extract works 2", () => {
    const scope = new Scope('pages')
    scope.index = 0
    const path = '/root/dir/pages/grand/pages/hello/hi'
    const { scopeProp, relativePath } = scope.extract(path, scope)

    expect(scopeProp).toEqual('/root/dir/pages/grand/');
    expect(relativePath).toEqual('/hello/hi');
  });


  test("Scope add with uniq works", () => {
    const scope = new Scope('pages')
    scope.index = 0
    const filePath = '/root/dir/grand'
    const section = [{}]
    scope.add(section, filePath)
    scope.add(section, filePath)
    expect(section).toEqual([{'/root/dir/': ['grand']}]);
  });
});
