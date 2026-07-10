 /*
 	class A{
	 
	}
	class B : public A {
	
	}
	class C : public B{
	}
 	
 */
#include<iostream>
using namespace std;

class A{
	public:
		void data(){
			cout<<"A class function"<<endl;
		}
};

class B : public A{
	public:
		void dataB(){
			cout<<"B class Function"<<endl;
		}
};
class C : public B{
	public:
		void dataC(){
			cout<<"C class Function"<<endl;
		}
};


int main()
{
	
	C obj;
	obj.dataB();
	obj.dataC();
	obj.data();
	
	return 0;
}
