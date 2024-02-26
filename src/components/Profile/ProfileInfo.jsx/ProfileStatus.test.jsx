import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the local state status', () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    const instance = component.getInstance();
    expect(instance.props.status).toEqual(instance.state.status);
  });

  test('span should be displayed after component creation', async () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    const root = component.root;
    expect(() => root.findByType('span')).toBeDefined();
  });

  test("input shouldn't be displayed after component creation", () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    const root = component.root;
    expect(() => root.findByType('input')).toThrow();
  });

  test('span status should be correct', () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    const root = component.root;
    const instance = component.getInstance();
    const span = root.findByType('span');
    expect(span.children[0]).toBe(instance.state.status);
  });

  test('after double click input should be displayed instead of span', () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    const root = component.root;
    const span = root.findByType('span');
    span.props.onDoubleClick();
    expect(() => root.findByType('input')).toBeDefined();
  });

  test('input value should be the same with span status', async () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    const root = component.root;
    const instance = component.getInstance();
    const span = await root.findByType('span');
    span.props.onDoubleClick();
    const input = await root.findByType('input');
    expect(input.props.value).toBe(instance.state.status);
  });

  test('callback should be called', () => {
    const mockCallBack = jest.fn();
    const component = create(
      <ProfileStatus status={'samuraiJS.com'} updateUserStatus={mockCallBack} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
