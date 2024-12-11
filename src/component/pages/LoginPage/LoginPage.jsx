import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { userschema } from "../../../schema/userschema";
import { createuser } from "../../../redux/slices/userslice/userslice";
import { useDispatch } from "react-redux";
const RegisterForm = () => {
  const dispatch = useDispatch();
const 
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userschema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // handel register function
  const handelRegister = (data) => {
    try {
      dispatch(createuser(data))
        .unwarp()
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  console.log(errors, "eror");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh ",
      }}
      style={{
        backgroundPosition: "bottom", // Controls the position of the background
        backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
        backgroundSize: "cover", // Makes the background cover the container
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          p: "40px 0",
          height: 580,
          width: "67%",
          borderRadius: 1,
          backdropFilter: "blur(4px) saturate(200%)",
          WebkitBackdropFilter: "blur(4px) saturate(200%)", // Safari compatibility
          backgroundColor: "rgba(255, 255, 255, 0.24)",
          border: "1px solid rgba(209, 213, 219, 0.3)",
        }}
      >
        {/* ------------------------------ */}
        {/* registerration form */}
        <Box
          className=" h-[550px]  p-5 pl-[30px] mr-4"
          sx={{
            width: "50%",
            backdropFilter: "blur(25px) saturate(200%)",
            WebkitBackdropFilter: "blur(25px) saturate(200%)", // Safari compatibility
            backgroundColor: "rgba(255, 255, 255, 0.83)",
            borderRadius: "12px",
            border: "1px solid rgba(209, 213, 219, 0.3)",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "30px",
              color: "#FF4F5A",
              textAlign: "center",
              marginBottom: "5px",
            }}
          >
            Log In Your Account
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              // color: "rgba(255, 255, 255, 0.8)",
              color: "black",
              textAlign: "center",
              mb: 3, // Adds spacing below the description
            }}
          ></Typography>
          <Box className="p-2 w-[100%] ">
            <form
              className="flex flex-col h-[350px] justify-between  "
              onSubmit={handleSubmit(handelRegister)}
            >

              {/* email input */}
              <Box>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#FF4F5A", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}

              {/* password */}
              <Box>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#FF4F5A", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}     
              <Button
                type="submit"
                variant={"contained"}
                sx={{
                  textTransform: "none",
                  height: "50px",
                  backgroundColor: "blue",
                  // backgroundColor:"white",
                  fontSize: "22px",
                  fontWeight: "400",
                }}
              >
                Sign in
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default RegisterForm;
