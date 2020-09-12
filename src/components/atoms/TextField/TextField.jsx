import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import style, { STextFieldLabel } from "./TextField.style"
import { css } from "aphrodite/no-important";
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex";

const TextField = forwardRef((props, ref) => {
	const { styles, icon, value, onChange, coloricon, placeholder } = props;
	return (
		<SWrapperFlex className={css([style.flex, styles])}>
			{icon && <STextFieldLabel $color={coloricon}>{icon}</STextFieldLabel>}
			<input
				ref={ref}
				defaultValue={value}
				onKeyUp={onChange}
				$color={coloricon}
				spellCheck={false}
				placeholder={placeholder}
				className={css(style.input)}
			/>
		</SWrapperFlex>
	)
})

TextField.defaultProps = {
	value: "",
	type: "text",
	onChange: () => null,
}

TextField.propTypes = {
	icon: PropTypes.element,
	type: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	colortext: PropTypes.string,
	coloricon: PropTypes.string,
	name: PropTypes.string,
}

export default TextField;