import { connect } from 'react-redux'
import ActivityFeedComponent from '../components/ActivityFeed'


const mapStateToProps = (state) => ({
  representatives: state.representatives
})

const mapDispatchToProps = {
}

const ActivityFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFeedComponent)

export default ActivityFeed
