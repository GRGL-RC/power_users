import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import User from './User';

configure({ adapter: new Adapter() });

test("## Trigger rerender", () => {
    // render component
    const wrapper = shallow(<User user={{ id: 1, name: "user 1", clicks: 0 }} />);
    expect(wrapper.containsAnyMatchingElements([<button>Remove 1</button>])).toEqual(true);
    // attempt to rerender
    //expect(screen.getByText(/user 2/i)).toBeInTheDocument();

});
