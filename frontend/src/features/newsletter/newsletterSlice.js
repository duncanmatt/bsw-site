import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsletterService from './newsletterService';

const sub = JSON.parse(localStorage.getItem('subscription'));

const initialState = {
	sub: sub ? sub : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const subscribe = createAsyncThunk(
	'newsletter/subscribe',
	async (sub, thunkAPI) => {
		try {
			return await newsletterService.subscribe(sub);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const newsletterSlice = createSlice({
	name: 'newsletter',
	initialState,
	reducers: {
		reset: state => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
	},
	extraReducers: builder => {
		builder
			.addCase(subscribe.pending, state => {
				state.isLoading = true;
			})
			.addCase(subscribe.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(subscribe.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			});
	},
});

export const {reset} = newsletterSlice.actions;
export default newsletterSlice.reducer;
