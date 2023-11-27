// >> Đây chỉ là VD k quan tâm file Js này >>>>

//---------------------//

// import React from "react";

// class MyPomponent extends React.Component {
//   render() {
//     return <div>Hello my Component</div>;
//   }
// }

// export default MyPomponent;

import React from "react";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
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
    // console.log(">>> This data", this.props);
    // let name = this.props.name;
    // let age = this.props.age;

    // Destructuring 2 bien let tren:
    let { arrJobs } = this.props;

    let { showJobs } = this.state;

    // SD dk vs react
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log("check conmditional : ", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item) => (
                <div key={item.id}>
                  {item.title} - {item.salary}
                </div>
              ))}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
