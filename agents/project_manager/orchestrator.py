# agents/project_manager/orchestrator.py
import requests
import json

def parse_prompt_with_agent(prompt: str) -> dict:
    # Replace with your custom PromptParser agent's webhook URL from agent.ai Builder
    api_url = "https://api-lr.agent.ai/v1/agent/ybtrv5n4ic48mi2b/webhook/73e1c336"
    
    # Prepare payload with the user prompt
    payload = {"user_input": prompt}
    
    # Headers for the API call (update Authorization if your agent requires an API key)
    headers = {
        "Content-Type": "application/json"
    }
    
    # Make the POST request to your agent's webhook
    response = requests.post(api_url, json=payload, headers=headers)
    
    # Check the response
    if response.status_code == 200:
        data = response.json()
        return data  # Expected to be a dict with keys like "designer", "developer", etc.
    else:
        print("Error calling PromptParser agent:", response.status_code, response.text)
        # Fallback default tasks in case of error
        return {
            "designer": ["Generate UI mockups", "Define color scheme"],
            "developer": ["Setup frontend scaffolding", "Create backend API endpoints"],
            "project_manager": ["Configure CI/CD", "Deploy application"]
        }

if __name__ == "__main__":
    prompt = input("Enter your project idea: ")
    tasks = parse_prompt_with_agent(prompt)
    print("Assigned Tasks:", json.dumps(tasks, indent=2))

