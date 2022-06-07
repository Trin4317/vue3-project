import { ref, watch } from "vue";

export function useStorage(key, val = null) {
	let storedVal = read();

	if (storedVal) {
		val = ref(storedVal);
	} else {
		val = ref(val);

		// since there's nothing in the storage we need to write initially
		write();
	} 

	// without deep:true, watch only reacts if the whole object was changed
	watch(val, write, { deep:true });

	function read() {
		return JSON.parse(localStorage.getItem(key));
	}

	function write() {
		if (val.value === '' || val.value === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(val.value));	
		}
	}

	return val;
}