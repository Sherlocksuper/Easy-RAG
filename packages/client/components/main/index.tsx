import { ArrowLeftOutlined } from "@ant-design/icons"
import "./index.css"

const title = "Easy Rag"

const Main = () => {
  return <main className="content" style={{ padding: '20px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1 className={"app-title"} style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>{title}</h1>
    <div className={"input-container"} style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '60%' }}>
      <input
        type="text"
        placeholder="输入消息"
        className="text-input"
        style={{
          border: '1px solid #ccc', borderRadius: '20px', padding: '12px', width: '100%',
          backgroundColor: '#f5f5f5', color: '#333', fontSize: '16px', outline: 'none', transition: 'all 0.3s'
        }}
      />
      <button className="send-button" style={{
        backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '50%', padding: '12px',
        width: '48px', height: '48px', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background-color 0.3s'
      }}>
        <ArrowLeftOutlined />
      </button>
    </div>
  </main>
}

export default Main