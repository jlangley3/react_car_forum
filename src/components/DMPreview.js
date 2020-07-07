// src/DM.js
import React from 'react'
// import { NavLink } from 'react-router-dom';
import '../styles/DM.css'
import DM from './DM'

export default class DMPreview extends React.Component {

    constructor() {
        super()
        this.state = {
            // userID: null,
            // friendID: null,
            toggle: false
        }
    }

    handleClick = () => {
        console.log("HANDLE CLICK")
        let newBool = !this.state.toggle
        this.setState({toggle: newBool})
        console.log(this.state.toggle)
    }

    // componentDidMount() {
    //     this.setState({userID: this.props.userID, friendID: this.props.friendID})
    // }

    render() {
      console.log(this.props)
      let {friend, friendID, user, userID} = this.props
      return (
          <div>
          <br/>
      <div className="container">
        <button onClick={this.handleClick}> conversation between {user} and {friend} </button>
        {this.state.toggle ? <DM user={userID} friend={friendID} /> : null }

      </div>
      </div>)
    }
  }

// <Route exact path="/props-through-component" component={() => <PropsPage title={`Props through component`} />} />


// <NavLink
//   to="/"
//   exact
//   className="link"
//   activeStyle={{
//     background: 'darkorange'
//   }}


  {/*<div className="row">
    <div className="col-sm-10 col-sm-offset-1" id="logout">
        <div className="page-header">
            <h3 className="reviews">Leave your comment</h3>
            <div className="logout">
                <button className="btn btn-default btn-circle text-uppercase" type="button" onclick="$('#logout').hide(); $('#login').show()">
                    <span className="glyphicon glyphicon-off"></span> Logout
                </button>
            </div>
        </div>
        <div className="comment-tabs">
            <ul className="nav nav-tabs" role="tablist">
                <li className="active"><a href="#comments-logout" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Comments</h4></a></li>
                <li><a href="#add-comment" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Add comment</h4></a></li>
                <li><a href="#account-settings" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Account settings</h4></a></li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="comments-logout">
                    <ul className="media-list">
                      <li className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle" src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="profile"/>
                        </a>
                        <div className="media-body">
                          <div className="well well-lg">
                              <h4 className="media-heading text-uppercase reviews">Davis </h4>
                              <ul className="media-date text-uppercase reviews list-inline">
                                <li className="dd">22</li>
                                <li className="mm">09</li>
                                <li className="aaaa">2014</li>
                              </ul>
                              <p className="media-comment">
                                YEAH!!!!
                              </p>
                              <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                              <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyOne"><span className="glyphicon glyphicon-comment"></span> 2 comments</a>
                          </div>
                        </div>
                        <div className="collapse" id="replyOne">
                            <ul className="media-list">
                                <li className="media media-replied">
                                    <a className="pull-left" href="#">
                                      <img className="media-object img-circle" src="https://www.motoringresearch.com/wp-content/uploads/2019/09/01-fastest-cars.jpg" alt="profile"/>
                                    </a>
                                    <div className="media-body">
                                      <div className="well well-lg">
                                          <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt"></span> The Hipster</h4>
                                          <ul className="media-date text-uppercase reviews list-inline">
                                            <li className="dd">22</li>
                                            <li className="mm">09</li>
                                            <li className="aaaa">2014</li>
                                          </ul>
                                          <p className="media-comment">
                                           LETS GO!!!
                                          </p>
                                          <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                                      </div>
                                    </div>
                                </li>
                                <li className="media media-replied" id="replied">
                                    <a className="pull-left" href="#">
                                      <img className="media-object img-circle" src="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Cars/November/CR-Cars-InlineHero-2020-Toyota-Prius-AWD-f-11-19" alt="profile"/>
                                    </a>
                                    <div className="media-body">
                                      <div className="well well-lg">
                                          <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt"></span> Mary</h4>
                                          <ul className="media-date text-uppercase reviews list-inline">
                                            <li className="dd">22</li>
                                            <li className="mm">09</li>
                                            <li className="aaaa">2014</li>
                                          </ul>
                                          <p className="media-comment">
                                            Thank you Guys!
                                          </p>
                                          <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                                      </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </li>
                      <li className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle" src="https://static.ed.edmunds-media.com/unversioned/unit-gw/homepage-article/cheapest-new-cars-396x223-3.jpg" alt="profile"/>
                        </a>
                        <div className="media-body">
                          <div className="well well-lg">
                              <h4 className="media-heading text-uppercase reviews">Ninja</h4>
                              <ul className="media-date text-uppercase reviews list-inline">
                                <li className="dd">22</li>
                                <li className="mm">09</li>
                                <li className="aaaa">2014</li>
                              </ul>
                              <p className="media-comment">
                                Thanks!
                              </p>
                              <div className="embed-responsive embed-responsive-16by9">
                                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ZFfdIEwJw8c" allowfullscreen></iframe>
                              </div>
                              <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle" src="https://static.ed.edmunds-media.com/unversioned/unit-gw/homepage-article/cheapest-new-cars-396x223-3.jpg" alt="profile"/>
                        </a>
                        <div className="media-body">
                          <div className="well well-lg">
                              <h4 className="media-heading text-uppercase reviews">Fitz</h4>
                              <ul className="media-date text-uppercase reviews list-inline">
                                <li className="dd">22</li>
                                <li className="mm">09</li>
                                <li className="aaaa">2014</li>
                              </ul>
                              <p className="media-comment">
                               There!
                              </p>
                              <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                              <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyTwo"><span className="glyphicon glyphicon-comment"></span> 1 comment</a>
                          </div>
                        </div>
                        <div className="collapse" id="replyTwo">
                            <ul className="media-list">
                                <li className="media media-replied">
                                    <a className="pull-left" href="#">
                                      <img className="media-object img-circle" src="https://static.ed.edmunds-media.com/unversioned/unit-gw/homepage-article/cheapest-new-cars-396x223-3.jpg" alt="profile"/>
                                    </a>
                                    <div className="media-body">
                                      <div className="well well-lg">
                                          <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt"></span> Lizz</h4>
                                          <ul className="media-date text-uppercase reviews list-inline">
                                            <li className="dd">22</li>
                                            <li className="mm">09</li>
                                            <li className="aaaa">2014</li>
                                          </ul>
                                          <p className="media-comment">
                                            classNamey!
                                          </p>
                                          <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                                      </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </li>
                    </ul>
                </div>
                <div className="tab-pane" id="add-comment">
                    <form action="#" method="post" className="form-horizontal" id="commentForm" role="form">
                        <div className="form-group">
                            <label for="email" className="col-sm-2 control-label">Comment</label>
                            <div className="col-sm-10">
                              <textarea className="form-control" name="addComment" id="addComment" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="uploadMedia" className="col-sm-2 control-label">Upload media</label>
                            <div className="col-sm-10">
                                <div className="input-group">
                                  <div className="input-group-addon">http://</div>
                                  <input type="text" className="form-control" name="uploadMedia" id="uploadMedia"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-success btn-circle text-uppercase" type="submit" id="submitComment"><span className="glyphicon glyphicon-send"></span> Summit comment</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane" id="account-settings">
                    <form action="#" method="post" className="form-horizontal" id="accountSetForm" role="form">
                        <div className="form-group">
                            <label for="avatar" className="col-sm-2 control-label">Avatar</label>
                            <div className="col-sm-10">
                                <div className="custom-input-file">
                                    <label className="uploadPhoto">
                                        Edit
                                        <input type="file" className="change-avatar" name="avatar" id="avatar"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="name" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" name="name" id="name" placeholder="Vilma palma"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="nickName" className="col-sm-2 control-label">Nick name</label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" name="nickName" id="nickName" placeholder="Vilma"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="email" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                              <input type="email" className="form-control" name="email" id="email" placeholder="vilma@mail.com"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="newPassword" className="col-sm-2 control-label">New password</label>
                            <div className="col-sm-10">
                              <input type="password" className="form-control" name="newPassword" id="newPassword"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="confirmPassword" className="col-sm-2 control-label">Confirm password</label>
                            <div className="col-sm-10">
                              <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-primary btn-circle text-uppercase" type="submit" id="submit">Save changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
	</div>
  </div>
  <div className="row">
    <div className="col-sm-10 col-sm-offset-1" id="login">
        <div className="page-header">
            <h3 className="reviews">Leave your comment</h3>
            <div className="logout">
                <button className="btn btn-default btn-circle text-uppercase" type="button" onclick="$('#login').hide(); $('#logout').show()">
                    <span className="glyphicon glyphicon-off"></span> Login
                </button>
            </div>
        </div>
        <div className="comment-tabs">
            <ul className="nav nav-tabs" role="tablist">
                <li className="active"><a href="#comments-login" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Comments</h4></a></li>
                <li><a href="#add-comment-disabled" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Add comment</h4></a></li>
                <li><a href="#new-account" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Create an account</h4></a></li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="comments-login">
                    <ul className="media-list">
                      <li className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle" src="https://static.ed.edmunds-media.com/unversioned/unit-gw/homepage-article/cheapest-new-cars-396x223-3.jpg" alt="profile"/>
                        </a>
                        <div className="media-body">
                          <div className="well well-lg">
                              <h4 className="media-heading text-uppercase reviews">Marco</h4>
                              <ul className="media-date text-uppercase reviews list-inline">
                                <li className="dd">22</li>
                                <li className="mm">09</li>
                                <li className="aaaa">2014</li>
                              </ul>
                              <p className="media-comment">
                                THere
                              </p>
                              <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                              <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyThree"><span className="glyphicon glyphicon-comment"></span> 2 comments</a>
                          </div>
                        </div>
                        <div className="collapse" id="replyThree">
                            <ul className="media-list">
                                <li className="media media-replied">
                                    <a className="pull-left" href="#">
                                      <img className="media-object img-circle" src="https://static.ed.edmunds-media.com/unversioned/unit-gw/homepage-article/cheapest-new-cars-396x223-3.jpg" alt="profile"/>
                                    </a>
                                    <div className="media-body">
                                      <div className="well well-lg">
                                          <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt"></span> The Hipster</h4>
                                          <ul className="media-date text-uppercase reviews list-inline">
                                            <li className="dd">22</li>
                                            <li className="mm">09</li>
                                            <li className="aaaa">2014</li>
                                          </ul>
                                          <p className="media-comment">
                                            Nice job Maria.
                                          </p>
                                          <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                                      </div>
                                    </div>
                                </li>
                                <li className="media media-replied" id="replied">
                                    <a className="pull-left" href="#">
                                      <img className="media-object img-circle" src="https://static.ed.edmunds-media.com/unversioned/unit-gw/homepage-article/cheapest-new-cars-396x223-3.jpg" alt="profile"/>
                                    </a>
                                    <div className="media-body">
                                      <div className="well well-lg">
                                          <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt"></span> Mary</h4>
                                          <ul className="media-date text-uppercase reviews list-inline">
                                            <li className="dd">22</li>
                                            <li className="mm">09</li>
                                            <li className="aaaa">2014</li>
                                          </ul>
                                          <p className="media-comment">
                                            Thank you Guys!
                                          </p>
                                          <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                                      </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </li>
                      <li className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle" src="https://static.ed.edmunds-media.com/unversioned/unit-gw/homepage-article/cheapest-new-cars-396x223-3.jpg" alt="profile"/>
                        </a>
                        <div className="media-body">
                          <div className="well well-lg">
                              <h4 className="media-heading text-uppercase reviews">Nico</h4>
                              <ul className="media-date text-uppercase reviews list-inline">
                                <li className="dd">22</li>
                                <li className="mm">09</li>
                                <li className="aaaa">2014</li>
                              </ul>
                              <p className="media-comment">
                               vdVFSDFDS
                              </p>
                              <div className="embed-responsive embed-responsive-16by9">
                                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/koCSWNAkF6s" allowfullscreen></iframe>
                              </div>
                              <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle" src="https://a.storyblok.com/f/81934/424x318/df302dea72/category-carousel_luxury-2x.jpg" alt="profile"/>
                        </a>
                        <div className="media-body">
                          <div className="well well-lg">
                              <h4 className="media-heading text-uppercase reviews">Kriztine</h4>
                              <ul className="media-date text-uppercase reviews list-inline">
                                <li className="dd">22</li>
                                <li className="mm">09</li>
                                <li className="aaaa">2014</li>
                              </ul>
                              <p className="media-comment">
                                Yehhhh... Thanks for sharing.
                              </p>
                              <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                              <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyFour"><span className="glyphicon glyphicon-comment"></span> 1 comment</a>
                          </div>
                        </div>
                        <div className="collapse" id="replyFour">
                            <ul className="media-list">
                                <li className="media media-replied">
                                    <a className="pull-left" href="#">
                                      <img className="media-object img-circle" src="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Cars/November/CR-Cars-InlineHero-2020-Toyota-Prius-AWD-f-11-19" alt="profile"/>
                                    </a>
                                    <div className="media-body">
                                      <div className="well well-lg">
                                          <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt"></span> Lizz</h4>
                                          <ul className="media-date text-uppercase reviews list-inline">
                                            <li className="dd">22</li>
                                            <li className="mm">09</li>
                                            <li className="aaaa">2014</li>
                                          </ul>
                                          <p className="media-comment">
                                            classNamey!
                                          </p>
                                          <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                                      </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </li>
                    </ul>
                </div>
                <div className="tab-pane" id="add-comment-disabled">
                    <div className="alert alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert">
                        <span aria-hidden="true">×</span><span className="sr-only">Close</span>
                      </button>
                      <strong>Hey!</strong> If you already have an account <a href="#" className="alert-link">Login</a> now to make the comments you want. If you do not have an account yet you're welcome to <a href="#" className="alert-link"> create an account.</a>
                    </div>
                    <form action="#" method="post" className="form-horizontal" id="commentForm" role="form">
                        <div className="form-group">
                            <label for="email" className="col-sm-2 control-label">Comment</label>
                            <div className="col-sm-10">
                              <textarea className="form-control" name="addComment" id="addComment" rows="5" disabled></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="uploadMedia" className="col-sm-2 control-label">Upload media</label>
                            <div className="col-sm-10">
                                <div className="input-group">
                                  <div className="input-group-addon">http://</div>
                                  <input type="text" className="form-control" name="uploadMedia" id="uploadMedia" disabled/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-success btn-circle text-uppercase disabled" type="submit" id="submitComment"><span className="glyphicon glyphicon-send"></span> Summit comment</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane" id="new-account">
                    <form action="#" method="post" className="form-horizontal" id="commentForm" role="form">
                        <div className="form-group">
                            <label for="name" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" name="name" id="name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="email" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                              <input type="email" className="form-control" name="email" id="email" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="password" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-10">
                              <input type="password" className="form-control" name="password" id="password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="checkbox">
                                <label for="agreeTerms" className="col-sm-offset-2 col-sm-10">
                                    <input type="checkbox" name="agreeTerms" id="agreeTerms"/> I agree all <a href="#">Terms & Conditions</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-primary btn-circle text-uppercase" type="submit" id="submit">Create an account</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div className="page-header text-center">
    <h3 className="reviews"><span className="glyphicon glyphicon-magnet"></span></h3>
  </div>
  <div className="notes text-center"><small>Image credits: uifaces.com</small></div>
</div> */}
