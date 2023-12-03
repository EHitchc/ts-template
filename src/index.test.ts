import { main } from ".";

test('main', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    main();

    expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
});
