 /*
 	class A{
	 
	}
	class B : public A {
	
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


int main()
{
	B obj;
	obj.data();
	obj.dataB();
	obj.data();
	
	
	return 0;
}
