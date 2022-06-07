import flash from "@/mixins/flash";

export function useFlash() {
	function flash(message) {
		return swal('Success!', message, 'warning');
	}

	return { flash };
}