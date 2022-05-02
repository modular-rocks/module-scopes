import setDefaults from './index.js'

describe("ModularRocks SetDefaults", () => {
  test("a", () => {
    const opts = {}

    setDefaults(opts)

    expect(opts.types.length).toEqual(1);
    expect(opts.types[0].algorithm).toEqual('Enhanced');
    expect(opts.types[0].pathname).toEqual('rocks');
  });

  test("b", () => {
    const opts = {
      types: []
    }

    setDefaults(opts)

    expect(opts.types.length).toEqual(1);
    expect(opts.types[0].algorithm).toEqual('Enhanced');
    expect(opts.types[0].pathname).toEqual('rocks');
  });

  test("c", () => {
    const opts = {
      types: ['data']
    }

    setDefaults(opts)

    expect(opts.types.length).toEqual(1);
    expect(opts.types[0].algorithm).toEqual('Scope');
    expect(opts.types[0].pathname).toEqual('data');
  });

  test("cc", () => {
    const opts = {
      types: ['+data']
    }

    setDefaults(opts)

    expect(opts.types.length).toEqual(1);
    expect(opts.types[0].pathname).toEqual('data');
    expect(opts.types[0].algorithm).toEqual('Logic');
  });

  test("ccc", () => {
    const opts = {
      types: ['*data']
    }

    setDefaults(opts)

    expect(opts.types.length).toEqual(1);
    expect(opts.types[0].pathname).toEqual('data');
    expect(opts.types[0].algorithm).toEqual('Enhanced');
  });


  test("d", () => {
    const opts = {
      types: [{attr: 'data'}]
    }

    const t = () => {
      setDefaults(opts)
    };
    expect(t).toThrow(Error);
  });

  test("e", () => {
    const opts = {
      types: ['pages', {pathname: 'components'}, {pathname: 'rocks'}]
    }

    setDefaults(opts)

    expect(opts.types[0].algorithm).toEqual('Scope');
    expect(opts.types[1].algorithm).toEqual(undefined);
    expect(opts.types[2].algorithm).toEqual(undefined);
  });


  test("f", () => {
    const opts = {
      types: [{pathname: 'data', algorithm: 'Enhanced'}]
    }

    setDefaults(opts)

    expect(opts.types[0].algorithm).toEqual('Enhanced');
  });

  test("g", () => {
    const opts = {
      types: [{pathname: 'data', algorithm: 'Rock'}]
    }

    setDefaults(opts)

    expect(opts.types[0].algorithm).toEqual('Rock');
  });
});
