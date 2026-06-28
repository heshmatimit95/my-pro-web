import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* لایه پشت مودال با افکت مات */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm"
      />
      
      {/* کانتینر اصلی مودال */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 md:p-8 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10"
      >
        {/* دکمه بستن */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-blue-950 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* محتوای ویدیو */}
        {project.video && (
          <div className="w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden bg-slate-100">
            <video 
              src={project.video} 
              controls 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* عنوان و توضیحات */}
        <div className="mb-10">
          <h2 className="text-3xl font-black text-blue-950 mb-4">{project.title}</h2>
          <p className="text-slate-700 leading-relaxed text-lg font-medium">
            {project.fullDetail || project.desc}
          </p>
        </div>

        {/* بخش تخمین‌گر قیمت که در مودال قرار گرفت */}
        <div className="border-t pt-8">
          <h3 className="text-xl font-bold text-blue-950 mb-6 text-center">آیا پروژه مشابهی دارید؟ هزینه آن را محاسبه کنید:</h3>
         
        </div>
      </motion.div>
    </div>
  );
}