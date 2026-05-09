import express from "express";
import cors from "cors";
import ollama from "ollama";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze", async (req, res) => {
  const userText = req.body.text;
  console.log("USER TEXT:", userText);

  try {
    const reasoningPass = await ollama.chat({
      model: "llama3",
      messages: [
        {
          role: "user",
          content: `
            Analyze the text for logical fallacies.
                    
            For each fallacy found provide:
            - Fallacy Name
            - Why it is a fallacy
            - Exact quote from the text
            - Confidence 1-10
                    
            Rules:
            - A statement can contain multiple fallacies.
            - Only report fallacies with confidence 4 or higher.
            - Focus on errors in reasoning, not insults or emotional language.
            - Use the most specific fallacy possible.
                    
            If no fallacies are found respond exactly:
            No Fallacies Detected
                    
            Text:
            ${JSON.stringify(userText)}
          `
        }
      ]
    });

    const reasoningOutput = reasoningPass.message.content;
    console.log("REASONING OUTPUT:", reasoningOutput);

    const formattingPass = await ollama.chat({
      model: "llama3",
      messages: [
        {
          role: "user",
          content: `
            You are a JSON formatter. 
            Your ONLY job is to convert the analysis below into valid JSON.
                    
            RULES:
            - Output ONLY valid JSON.
            - NO text before the JSON.
            - NO text after the JSON.
            - NO explanations.
            - NO commentary.
            - NO phrases like "Here is the JSON".
            - NO markdown.
            - NO backticks.
                    
            JSON FORMAT TO FOLLOW EXACTLY:
                    
            {
              "fallacies": [
                {
                  "type": "",
                  "explanation": "",
                  "evidence": ""
                }
              ]
            }
                    
            If no fallacies are present, output exactly:
            { "fallacies": [] }
                    
            Convert this analysis into JSON:
            ${JSON.stringify(reasoningOutput)}
          `
        }
      ]
    });

    console.log("JSON RAW OUTPUT:", formattingPass.message.content);

    const finalJson = JSON.parse(formattingPass.message.content);
    res.json(finalJson);

  } catch (err) {
    console.error("Ollama error:", err);
    res.status(500).json({ error: "Model error", details: err.message });
  }
});

app.listen(3000, () => console.log("Backend running on port 3000"));
