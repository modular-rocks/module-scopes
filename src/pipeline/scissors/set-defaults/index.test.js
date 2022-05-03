import setDefaults from './index.js'

describe("ModularRocks SetDefaults", () => {
  test("a", () => {
    const opts = {}

    setDefaults(opts)

    expect(opts.factories.length).toEqual(1);
    expect(opts.factories[0].algorithm).toEqual('Procedural');
    expect(opts.factories[0].pathname).toEqual('rocks');
  });

  test("b", () => {
    const opts = {
      factories: []
    }

    setDefaults(opts)

    expect(opts.factories.length).toEqual(1);
    expect(opts.factories[0].algorithm).toEqual('Procedural');
    expect(opts.factories[0].pathname).toEqual('rocks');
  });

  test("c", () => {
    const opts = {
      factories: ['data']
    }

    setDefaults(opts)

    expect(opts.factories.length).toEqual(1);
    expect(opts.factories[0].algorithm).toEqual('Scope');
    expect(opts.factories[0].pathname).toEqual('data');
  });

  test("cc", () => {
    const opts = {
      factories: ['+data']
    }

    setDefaults(opts)

    expect(opts.factories.length).toEqual(1);
    expect(opts.factories[0].pathname).toEqual('data');
    expect(opts.factories[0].algorithm).toEqual('Logic');
  });

  test("ccc", () => {
    const opts = {
      factories: ['*data']
    }

    setDefaults(opts)

    expect(opts.factories.length).toEqual(1);
    expect(opts.factories[0].pathname).toEqual('data');
    expect(opts.factories[0].algorithm).toEqual('Procedural');
  });


  test("d", () => {
    const opts = {
      factories: [{attr: 'data'}]
    }

    const t = () => {
      setDefaults(opts)
    };
    expect(t).toThrow(Error);
  });

  test("e", () => {
    const opts = {
      factories: ['pages', {pathname: 'components'}, {pathname: 'rocks'}]
    }

    setDefaults(opts)

    expect(opts.factories[0].algorithm).toEqual('Scope');
    expect(opts.factories[1].algorithm).toEqual(undefined);
    expect(opts.factories[2].algorithm).toEqual(undefined);
  });


  test("f", () => {
    const opts = {
      factories: [{pathname: 'data', algorithm: 'Procedural'}]
    }

    setDefaults(opts)

    expect(opts.factories[0].algorithm).toEqual('Procedural');
  });

  test("g", () => {
    const opts = {
      factories: [{pathname: 'data', algorithm: 'Rock'}]
    }

    setDefaults(opts)

    expect(opts.factories[0].algorithm).toEqual('Rock');
  });
});
