import { motion } from "framer-motion";

import FadeAnimationType from "../../Types";

const FadeIn = (props: FadeAnimationType) => {
    return (<motion.div
        variants={{
            initial: { opacity: 0, },
            final: { opacity: 1, }
        }}
        initial="initial"
        animate="final"
        transition={{ duration: props.duration ? props.duration : 0.5, delay: props.delay ? props.delay : 2 }}
    >
        {props.children}
    </motion.div>)
}


export default FadeIn;