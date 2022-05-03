import Logic from './index.js'

describe("ModularLogics Logic", () => {
  test("Logic build works", () => {
    const rock = new Logic('rocks')
    rock.index = 0
    expect(rock.build()).toEqual({});
  });

  test("Logic extract works", () => {
    const rock = new Logic('rocks')
    rock.index = 0
    const path = '/root/dir/rocks/grand'
    const { scopeProp, relativePath  } = rock.extract(path, rock)

    expect(scopeProp).toEqual('/root/dir/');
    expect(relativePath).toEqual('/grand');
  });

  test("Logic extract works 2", () => {
    const type = new Logic('rocks')
    type.index = 0
    const path = '/root/dir/grand/hi.js'
    const { scopeProp, relativePath  } = type.extract(path, [])

    expect(scopeProp).toEqual('/root/dir/grand/hi.js');
    expect(relativePath).toEqual('');
  });

  test("Logic add works", () => {
    const rock = new Logic('rocks')
    rock.index = 0
    const filePath = '/root/dir/grand/one/two/three.js'
    const section = [{}]
    rock.add(section, filePath)
    expect(section).toEqual([{'/root/dir/grand/one/two/': ['three.js']}]);
  });

  test("Logic add with uniq works", () => {
    const rock = new Logic('rocks')
    rock.index = 0
    const filePath = '/root/dir/grand.js'
    const section = [{}]
    rock.add(section, filePath)
    rock.add(section, filePath)
    expect(section).toEqual([{'/root/dir/': ['grand.js']}]);
  });
});
