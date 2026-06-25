var amount = 2802417;

var { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
stateNode.setState({ crypto: amount, crypto2: amount });
stateNode.props.liveGameController.setVal({
    path: `c/${stateNode.props.client.name}/cr`,
    val: amount
});