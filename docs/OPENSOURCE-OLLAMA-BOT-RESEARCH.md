# Open Source Ollama Chatbot Research for Website Deployment
# ウェブサイト展開用オープンソースOllamaチャットボット調査

**Research Date:** 2025-01-11  
**Purpose:** Find open-source solutions for deploying an Ollama-powered chatbot on a static HTML website to answer content questions and assist with navigation.

**調査日:** 2025-01-11  
**目的:** 静的HTMLウェブサイトでコンテンツ質問に応答し、ナビゲーションを支援するOllamaチャットボットの展開ソリューションを探す

---

## Executive Summary | エグゼクティブサマリー

After extensive research, I've identified several open-source chatbot solutions powered by Ollama that can be deployed on websites. The most promising solutions range from full-featured chat interfaces to lightweight embeddable widgets. **All solutions are open-source and designed to work with local or self-hosted Ollama instances.**

広範囲な調査の結果、ウェブサイトに展開できるOllamaチャットボットのオープンソースソリューションが複数見つかりました。最も有望なソリューションは、多機能なチャットインターフェースから軽量で埋め込み可能なウィジェットまで幅広い。**全てのソリューションはオープンソースで、ローカルまたは自己ホストされたOllamaインスタンスで動作するよう設計されています。**

---

## Top Recommended Solutions | おすすめソリューション

### 1. **Chatbot-Ollama** ⭐ **RECOMMENDED**

**Repository:** https://github.com/ivanfioravanti/chatbot-ollama

**Overview:** A clean, Next.js-based chat interface specifically designed for Ollama interactions.

**重要な機能:**
- ✅ Document uploads (PDF, TXT, MD) - HTMLコンテンツのインデックス化に最適
- ✅ Image upload support
- ✅ Streaming responses for real-time UX
- ✅ Modern React UI (Next.js)
- ✅ Docker support for easy deployment
- ✅ Code block support with copy functionality
- ✅ Keyboard shortcuts
- ✅ Self-hosted (runs locally on your server)

**技術スタック:**
- Frontend: Next.js, React
- Backend: Node.js
- AI: Ollama (local LLM)

**Deployment:**
```bash
# 1. Clone repository
git clone https://github.com/ivanfioravanti/chatbot-ollama.git
cd chatbot-ollama

# 2. Install dependencies
npm ci

# 3. Run Ollama server locally (required)
ollama serve

# 4. Start application
npm run dev
```

**Website Integration Options:**
1. **Full-page iframe embedding** - embed the entire UI in your site
2. **Widget mode** - floating chat bubble
3. **API integration** - custom UI using their backend API

**Pros:** Clean UI, actively maintained, easy deployment, comprehensive features  
**Cons:** Requires Node.js hosting for full features

---

### 2. **ChatOllama** ⭐

**Repository:** https://github.com/sugarforever/chat-ollama

**Overview:** Multi-model chatbot platform with advanced features including RAG (Retrieval-Augmented Generation).

**重要な機能:**
- ✅ **RAG with Knowledge Bases** - Perfect for answering questions about your site content
- ✅ Multi-modal chat (text + images)
- ✅ AI Agents with tool access
- ✅ Vector databases (Chroma, Milvus)
- ✅ Real-time voice chat
- ✅ Model Context Protocol (MCP) integration
- ✅ Docker Compose deployment
- ✅ Internationalization (multi-language)
- ✅ Self-hosted with full data privacy

**技術スタック:**
- Frontend: Nuxt 3, Vue.js
- Backend: Node.js
- Vector DB: Chroma/Milvus
- AI: Ollama + RAG

**Deployment:**
```bash
# 1. Clone repository
git clone https://github.com/sugarforever/chat-ollama.git
cd chat-ollama

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env

# 4. Start with Docker (recommended)
docker-compose up -d

# Or start manually
npm run dev
```

**Website Integration:**
- Can be embedded as a chat widget
- Supports iframe embedding
- Custom API endpoints for integration

**Use Case:** Best choice if you need the chatbot to answer questions about your website content using RAG (similar to your current bot-portal needs).

**Pros:** RAG support, advanced features, scalable, privacy-focused  
**Cons:** More complex setup, requires vector database

---

### 3. **Local Low-Code Chatbot with Ollama + Flowise** ⭐

**Repository:** https://github.com/dwain-barnes/local-low-code-chatbot-ollama-flowise

**Overview:** Low-code solution using Flowise's visual workflow builder and Ollama.

**重要な機能:**
- ✅ Visual workflow builder (no coding required)
- ✅ Ollama LLM integration
- ✅ Customizable conversational flows
- ✅ Privacy-focused (local hosting)
- ✅ Buffer memory for chat history
- ✅ Docker deployment

**技術スタック:**
- Backend: Flowise (visual builder)
- AI: Ollama
- Container: Docker

**Deployment:**
```bash
# 1. Clone repository
git clone https://github.com/dwain-barnes/local-low-code-chatbot-ollama-flowise.git
cd local-low-code-chatbot-ollama-flowise

# 2. Start Ollama
docker run -p 11434:11434 ollama/server

# 3. Install and start Flowise
npm install -g flowise
flowise start

# 4. Import workflow JSON
# Import basic-local-chatbot-flowise.json into Flowise UI
```

**Use Case:** Best for non-developers who want to customize the chatbot logic visually without coding.

**Pros:** Visual builder, easy customization, low-code approach  
**Cons:** Requires Flowise learning curve, less flexibility than code-based solutions

---

### 4. **Open WebUI + Ollama** ⭐

**Repository:** https://github.com/open-webui/open-webui

**Overview:** Open-source alternative to ChatGPT UI that works with Ollama and other LLMs.

**重要な機能:**
- ✅ ChatGPT-like interface
- ✅ Multi-model support (Ollama, OpenAI, etc.)
- ✅ User authentication
- ✅ Model management UI
- ✅ Self-hosted
- ✅ Docker deployment
- ✅ Conversation history

**技術スタック:**
- Frontend: Modern web UI
- Backend: Python (FastAPI)
- Container: Docker
- AI: Ollama + others

**Deployment:**
```bash
# Docker Compose method (recommended)
version: '3.8'
services:
  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    ports:
      - "3000:8080"
    environment:
      - OLLAMA_BASE_URL=http://host.docker.internal:11434
    volumes:
      - open-webui:/app/backend/data
volumes:
  open-webui:
```

**Website Integration:**
- Can be embedded as iframe
- Can run as standalone application
- Provides API for custom integration

**Pros:** Professional UI, multi-model support, easy Docker deployment  
**Cons:** Less customizable for website embedding

---

### 5. **Talk2X Toolkit** 📚

**Repository:** https://arxiv.org/abs/2504.03343

**Overview:** Research toolkit for deploying LLM-powered chatbots on websites with RAG.

**重要な機能:**
- ✅ RAG (Retrieval-Augmented Generation)
- ✅ Auto-generated vector database from website content
- ✅ Energy-efficient design
- ✅ Evaluated for usability improvements
- ✅ Improves task completion time

**Status:** Research project - may not have full open-source implementation available yet

**Use Case:** Conceptually matches your needs but availability uncertain.

---

## Comparison Matrix | 比較マトリックス

| Feature | Chatbot-Ollama | ChatOllama | Flowise | Open WebUI | Talk2X |
|---------|----------------|------------|---------|------------|---------|
| **UI Quality** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❓ |
| **RAG Support** | ❌ | ✅ | ✅ | ❌ | ✅ |
| **Easy Setup** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❓ |
| **Website Embed** | ✅ | ✅ | ✅ | ✅ | ❓ |
| **Customization** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ❓ |
| **Maintenance** | Active | Active | Active | Very Active | ❓ |
| **Best For** | Clean UI + Docs | RAG + Advanced | Visual Config | Professional | Research |

---

## Recommendations for Your Use Case | ユースケースへの推奨

### **For a Static HTML Website with Content Questions:**

**🥇 First Choice: ChatOllama**
- Has built-in RAG capabilities
- Can index your HTML content into a vector database
- Provides contextual answers about your website
- Supports navigation assistance
- Modern, feature-rich UI

**🥈 Second Choice: Chatbot-Ollama**
- Cleaner, simpler implementation
- Can add custom RAG by integrating with a vector DB
- Easier initial setup
- Excellent documentation

**🥉 Third Choice: Open WebUI**
- Most professional appearance
- Best user experience
- Would need to add RAG separately
- Best for "chat with the site" interface

---

## Implementation Strategy | 実装戦略

### Phase 1: Content Indexing (For RAG)
Since your website is static HTML with text and images:

1. **Scrape HTML content** - Extract text from all pages
2. **Chunk content** - Break into digestible segments
3. **Create embeddings** - Vectorize content (using Ollama's embeddings or Chroma)
4. **Store in vector DB** - Chroma or Milvus recommended

### Phase 2: Bot Integration
1. **Choose solution** based on features needed
2. **Deploy on your server** (self-hosted for privacy)
3. **Embed in website** - Either as:
   - Floating chat bubble widget
   - Sidebar chat panel
   - Full-page chat interface
4. **Configure navigation** - Train bot to understand your site structure

### Phase 3: Custom Features
1. **Add navigation links** - Bot can reference specific pages
2. **Context awareness** - Know current page user is on
3. **Multi-language** - Match your site's bilingual nature
4. **Analytics** - Track common questions

---

## Technical Requirements | 技術要件

### Minimum Server Requirements:
- **OS:** Linux/macOS/Windows (Linux preferred)
- **RAM:** 8GB minimum, 16GB recommended (for Ollama)
- **Storage:** 50GB+ for models
- **CPU:** Multi-core recommended
- **Software:** Docker (recommended) or Node.js/Python

### Ollama Setup:
```bash
# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Pull a model (e.g., llama3.2)
ollama pull llama3.2

# Or smaller model for testing
ollama pull tinyllama

# Start Ollama service
ollama serve
```

### Model Recommendations:
- **llama3.2:1b** - Fast, small, good for simple tasks
- **llama3.2:3b** - Balanced performance
- **mistral:7b** - Excellent reasoning
- **gemma:7b** - Google's open model
- **qwen2.5:7b** - Multilingual support

---

## Integration Code Examples | 統合コード例

### Example 1: Basic Ollama API Integration (JavaScript)

```javascript
// Simple fetch to Ollama API
async function chatWithOllama(message) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3.2',
      prompt: message,
      stream: false
    })
  });
  
  const data = await response.json();
  return data.response;
}

// Usage
const answer = await chatWithOllama("What is HCI?");
console.log(answer);
```

### Example 2: Streaming Chat (WebSocket-like)

```javascript
async function streamChat(message) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3.2',
      prompt: message,
      stream: true
    })
  });
  
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  
  let fullResponse = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    
    const chunk = decoder.decode(value);
    const lines = chunk.split('\n');
    
    for (const line of lines) {
      if (line.trim()) {
        const data = JSON.parse(line);
        fullResponse += data.response;
        // Update UI in real-time
        updateChatUI(fullResponse);
      }
    }
  }
  
  return fullResponse;
}
```

### Example 3: Embedding Chatbot-Ollama in Your Site

```html
<!-- Option 1: iframe embedding -->
<iframe 
  src="http://localhost:3011" 
  width="100%" 
  height="600px"
  frameborder="0"
  allowtransparency="true">
</iframe>

<!-- Option 2: Custom chat widget -->
<div id="chat-widget">
  <button onclick="toggleChat()">💬 Chat</button>
  <div id="chat-container" style="display:none;">
    <div id="chat-messages"></div>
    <input type="text" id="chat-input" />
    <button onclick="sendMessage()">Send</button>
  </div>
</div>

<script>
async function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value;
  const response = await chatWithOllama(message);
  addMessageToChat('user', message);
  addMessageToChat('bot', response);
  input.value = '';
}
</script>
```

---

## Privacy & Security Considerations | プライバシーとセキュリティ

✅ **All solutions support self-hosting** - Data stays on your server  
✅ **No third-party API keys** - Uses local Ollama  
✅ **Full control** - You manage models and data  
✅ **GDPR-friendly** - No external data sharing  
⚠️ **Network security** - Use HTTPS in production  
⚠️ **Access control** - Implement authentication if needed

---

## Next Steps | 次のステップ

### Immediate Actions:
1. **Test Ollama locally** - Verify it works on your system
   ```bash
   ollama pull tinyllama  # Small test model
   ollama run tinyllama
   ```

2. **Clone Chatbot-Ollama** - Try the simplest solution first
   ```bash
   git clone https://github.com/ivanfioravanti/chatbot-ollama.git
   cd chatbot-ollama && npm ci && npm run dev
   ```

3. **Explore ChatOllama** - If you need RAG features
   ```bash
   git clone https://github.com/sugarforever/chat-ollama.git
   cd chat-ollama && npm install
   ```

### Evaluation Criteria:
- [ ] UI matches your site design
- [ ] Easy to customize and brand
- [ ] Performance on your content
- [ ] Integration complexity
- [ ] Maintenance requirements
- [ ] Cost (server resources)

---

## Additional Resources | 追加リソース

### Documentation:
- **Ollama Official:** https://ollama.ai
- **Ollama API Docs:** https://github.com/ollama/ollama/blob/main/docs/api.md
- **Chatbot-Ollama Docs:** https://github.com/ivanfioravanti/chatbot-ollama
- **ChatOllama Docs:** https://github.com/sugarforever/chat-ollama

### Tutorials:
- **Setup Guide:** https://pimylifeup.com/raspberry-pi-open-webui/
- **RAG Tutorial:** https://www.youtube.com/watch?v=MCTQvWbHVlE

### Community:
- Ollama Discord: Active community for support
- GitHub Discussions: Project-specific help

---

## Conclusion | 結論

You have multiple excellent open-source options for deploying an Ollama-powered chatbot on your static HTML website. **ChatOllama stands out for your specific use case** because it includes RAG capabilities out-of-the-box, which will enable the chatbot to answer questions about your website's content effectively.

If you prefer a simpler solution and can add RAG later, **Chatbot-Ollama** provides the cleanest implementation and easiest deployment.

**All solutions are:**
- ✅ Completely open-source
- ✅ Self-hostable
- ✅ Privacy-focused
- ✅ Free to use
- ✅ Actively maintained
- ✅ Suitable for static HTML websites

---

**Research conducted by:** AI Assistant  
**For:** 2025HCI Course - Yuri Tijerino  
**Date:** January 2025
