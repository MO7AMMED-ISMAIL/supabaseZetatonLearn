import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../Supabase/supabaseClient";


export const getAllStudents = createAsyncThunk("students/getAllStudents", async () => {
    const { data, error } = await supabase
        .from("students")
        .select("*");
    if (error) {
        console.log(error);
    }
    return data;
});

export const getStudentById = createAsyncThunk("students/getStudentById", async (id) => {
    const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("id", id);
    if(error){
        console.log(error);
    }
    return data[0];
});

export const addStudent = createAsyncThunk("students/addStudent", async (student) => {
    const { data, error } = await supabase
        .from("students")
        .insert([student]);
    if (error) {
        console.log(error);
    }
    return data;
});

export const updateStudent = createAsyncThunk("students/updateStudent", async (student) => {
    const { data, error } = await supabase
        .from("students")
        .update(student)
        .eq("id", student.id);
    if (error) {
        console.log(error);
    }
    return data;
});

export const deleteStudentById = createAsyncThunk("students/deleteStudentById", async (id) => {
    const { data, error } = await supabase
        .from("students")
        .delete()
        .eq("id", id);
    if (error) {
        console.log(error);
    }
    return data;
})

const initialState = {
    students: [],
    student: {},
    loading: false,
    error: null,
}

const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllStudents.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllStudents.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload;
            })
            .addCase(getAllStudents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getStudentById.pending, (state) => {
                
            })
            .addCase(getStudentById.fulfilled, (state, action) => {
                state.loading = false;
                state.student = action.payload;
            })
            .addCase(getStudentById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.students.push(action.payload);
            })
            .addCase(addStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.students.push(action.payload);
            })
            .addCase(updateStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteStudentById.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteStudentById.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(deleteStudentById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default studentSlice.reducer;