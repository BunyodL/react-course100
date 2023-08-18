import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the local state status', () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    let instanse = component.getInstance();
    expect(instanse.props.status).toEqual(instanse.state.status);
  });

  test('span should be displayed after component creation',async  () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    let root = component.root;
    let span = root.findByType('span');
    expect(span).toBeDefined();
  });

  test("input shouldn't be displayed after component creation", () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    let root = component.root;
    expect(() => {
      root.findByType('input');
    }).toThrow();
  });

  test('span status should be correct', () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    let root = component.root;
    let instanse = component.getInstance();
    let span = root.findByType('span');
    expect(span.children[0]).toBe(instanse.state.status);
  });

  test('after double click input should be displayed instead of span', () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    let root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input).toBeDefined();
  });

  test('input value should be the same with span status', () => {
    const component = create(<ProfileStatus status={'samuraiJS.com'} />);
    let root = component.root;
    let instanse = component.getInstance();
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe(instanse.state.status);
  });

  test('callback should be called', () => {
    const mockCallBack = jest.fn();
    const component = create(<ProfileStatus status={'samuraiJS.com'} updateUserStatus={mockCallBack} />);
    let instanse = component.getInstance();
    instanse.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
