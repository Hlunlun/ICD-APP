export interface SidebarIconProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}


export interface NavItem {
  path: string;
  icon: React.ReactNode;
  title: string;
}
  
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
  
export interface InputSectionProps {
  inputText: string;
  setInputText: (text: string) => void;
  onTokenize: () => void;
  onClear: () => void;
}
  
export interface ResultsSectionProps {
  results: string;
}
  
export interface TokenProps {
  text: string;
}



