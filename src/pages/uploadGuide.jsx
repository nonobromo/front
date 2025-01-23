import { useState } from "react";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import GuideStep from "../components/common/guideStep";
import { useFormik } from "formik";
import Joi from "joi";
import { uploadGuide } from "../services/guidesService";

function CreateNewGuide() {
  const [guideSteps, setGuideSteps] = useState([{ id: 1 }, { id: 2 }]);

  const addGuideStep = () => {
    setGuideSteps([...guideSteps, { id: guideSteps.length + 1 }]);
  };

  const guideForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: [],
      steps: [
        {text: "", image: null},
        {text: "", image: null},  
      ]
    },
    validate(values){
      const schema = Joi.object({
          title: Joi.string().min(20).max(1024).required().label("Guide Title"),
          description: Joi.string().min(20).max(1024).required().label("Guide Description"),
          category: Joi.array()
            .items(
              Joi.string().valid(
                "Internet",
                "Printers",
                "Word",
                "Excel",
                "Outlook",
                "Misc"
              )
            )
            .min(1)
            .required().label("Select Categories"),
          steps: Joi.array()
            .items(
              Joi.object({
                text: Joi.string().min(5).required(),
                image: Joi.string().uri().optional(),
              })
            )
            .min(2)
            .required().label("Steps"),
        }).unknown();

        const {error} = schema.validate(values, {abortEarly: false})

        if (!error) return null;

      const errors = {};
      for (const detail of error.details) {
        const key = detail.path.join(".");
        errors[key] = detail.message;
      }
      return errors;
    },
     onSubmit(values){
      console.log(values)
    }
  })

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh" }}>
      <Typography fontSize={36} mt={4} textAlign="center">
        Create A Guide
      </Typography>

      <Box
      component="form"
      onSubmit={guideForm.handleSubmit}
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 5,
        }}
      >
        <TextField label="Guide Title" fullWidth required {...guideForm.getFieldProps("title")}/>
        <TextField label="Guide Description" fullWidth  required {...guideForm.getFieldProps("description")}/>

        <InputLabel>Select Categories</InputLabel>
        <Select
        multiple
        value={guideForm.values.category}
        onChange={(e) => guideForm.setFieldValue("category", e.target.value)}
        fullWidth
        required>
        <MenuItem value="Internet">Internet</MenuItem>
        <MenuItem value="Printers">Printers</MenuItem>
        <MenuItem value="Word">Word</MenuItem>
        <MenuItem value="Excel">Excel</MenuItem>
        <MenuItem value="Outlook">Outlook</MenuItem>
        <MenuItem value="Misc">Misc</MenuItem>
        </Select>

        <InputLabel>Steps</InputLabel>
        <Box>
          {guideSteps.map((step) => (
            <GuideStep key={step.id} stepNumber={step.id}/>
          ))}
        </Box>

        <Button variant="contained" onClick={addGuideStep}>
          Add Another Step
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth>
         Submit
      </Button>
      </Box>
    </Container>
  );
}

export default CreateNewGuide;
