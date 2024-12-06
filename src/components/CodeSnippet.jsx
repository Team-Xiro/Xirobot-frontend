import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `
import java.util.Scanner;

public class PowerCalculation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Input base (n) and exponent (p)
        System.out.print("Enter the base (n): ");
        double n = scanner.nextDouble();
        
        System.out.print("Enter the exponent (p): ");
        double p = scanner.nextDouble();
        
        // Calculate n^p
        double result = Math.pow(n, p);
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute px-2 py-1 text-sm text-white bg-gray-700 rounded-md top-2 right-2"
      >
        {copied ? "Copied!" : "Copy code"}
      </button>

      {/* Code Container */}
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{
          background: "transparent",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;