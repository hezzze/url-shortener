export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      submittedUrl:"",
      shortenedUrl: ""
    }
  }

  componentDidMount() {

    var that = this;

    $('#url_input_form').submit(function(e) {
      e.preventDefault();

      var form = $(this)[0];
      let url = form.elements.namedItem('urlInput').value
      let fmData = {
        url: url
      }

      that.setState({
        submittedUrl: url,
        shortenedUrl: ""
      })

      console.log(fmData);

      // $.ajax({
      //   url: "/shorten_request",
      //   type: "POST",
      //   data: fmData,
      //   success: (result) => {
      //     console.log(result);
      //     form.reset();
      //   },
      //   error: (jqXHR, textStatus, errorThrown) => {
      //     console.log(textStatus, errorThrown);
      //   }
      //
      // });

    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col s12">URL shortener</h1>
        </div>
        <div className="row">
          <form id="url_input_form">
            <div className="row">
              <div className="input-field col s10">
                <input id="url_input" type="text" className="validate" name="urlInput" required></input>
                <label htmlFor="url_input">Enter your URL here</label>
              </div>
              <div className="col s2">
                <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <p><strong>Submitted URL</strong>: <i>{this.state.submittedUrl}</i></p>
          <p><strong>Shortened URL</strong>: {this.state.shortenedUrl}</p>
        </div>
      </div>
    );
  }
}
