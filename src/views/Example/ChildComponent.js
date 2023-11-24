// import React from "react";

// class MyPomponent extends React.Component {
//   render() {
//     return <div>Hello my Component</div>;
//   }
// }

// export default MyPomponent;

import React from "react";
class ChildComponent extends React.Component {
  //   state = {
  //     firtName: "",
  //     lastName: "",
  //   };
  //   // DOM Events
  //   handleOnChangefistName = (event) => {
  //     this.setState({
  //       fistName: event.target.value,
  //     });
  //   };

  //   handleOnChangelastName = (event) => {
  //     this.setState({
  //       lastName: event.target.value,
  //     });
  //   };

  //   handleSubmit = (event) => {
  //     //Ngăn hành động mặc định của form khi submit, ngăn trình duyệt tự động tải lại trang khi form được gửi đi
  //     event.preventDefault();
  //     alert("Submit done");
  //   };

  render() {
    //Truyen nhieu data voi Props
    console.log(">>> This data", this.props);
    // let name = this.props.name;
    // let age = this.props.age;

    // Destructuring 2 bien let tren:
    let { name, age, arrJobs } = this.props;
    return (
      <>
        <div>
          child component name: {name} - {age}
        </div>

        <div className="job-lists">
          {arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default ChildComponent;
