import React, { Component } from "react";
// import Feed from "../containers/Feed";
import Feed from "../containers/Feed";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { getNews } from "../../store/actions/feeds";
import Button from "../components/Button";

const FEEDS_LIMIT = 5;

class NewFeeds extends Component {
  componentDidMount() {
    const { onGetNews } = this.props;
    onGetNews(0, FEEDS_LIMIT);
  }

  // window.addEventListener("scroll", this.handleScroll);

  // componentWillMount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  //     return;
  //   console.log("scroll");
  // };

  handleNewFeeds = () => {
    console.log("fetch");
    this.props.onGetNews(this.props.feedsCount, FEEDS_LIMIT);
  };

  render() {
    const { loading, newFeeds } = this.props;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            {newFeeds.map((feed) => (
              <div key={feed._id}>
                <Feed
                  title={feed.title}
                  description={feed.description}
                  sourceUrl={feed.source.url}
                  sourceTitle={feed.source.title}
                  createdAt={feed.created_at}
                  keywords={feed.keywords}
                />
              </div>
            ))}
            <Button onClick={(_) => this.handleNewFeeds()} />
          </>
        )}
      </div>
    );
  }
}

/*  */

const mapStateToProps = (state) => {
  return {
    loading: state.FeedsReducer.loading,
    newFeeds: state.FeedsReducer.newFeeds,
    feedsCount: state.FeedsReducer.feedsCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetNews: (skip, limit) => dispatch(getNews(skip, limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFeeds);
