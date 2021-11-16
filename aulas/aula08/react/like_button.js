const domContainer = document.getElementById('like_button_container')
const create = React.createElement

//componente
class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false }
    }

    render() {
        // return 'Texto'
        if (this.state.liked)
            return create(
                'h4',
                {
                    onClick: () => {
                        this.setState({ liked: false })
                    }
                },
                'Você curtiu a aula!'
            )

        return create(
            'button',
            {
                onClick: () => {
                    this.setState({ liked: true })
                }
            },
            'Curtir'
        )
    }
}

ReactDOM.render(create(LikeButton), domContainer)