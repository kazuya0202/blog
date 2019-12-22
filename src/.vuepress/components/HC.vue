<!-- HC: head content -->

<script>
export default {
    functional: true,
    props: {
        text: String,
    },
    render (h, { props, slots }) {
        if (props.text === undefined || props.text === '') {
            props.text = '◆'
        }

        return h('span', {
            class: ['head-content'],
        }, props.text || slots().default)
    }
}
</script>
